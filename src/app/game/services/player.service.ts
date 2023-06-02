import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface ScoreData {
  playerName: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _score: number = 0;
  private _lifes: number = 0;
  private _highScore: number = 0;

  get score(): number {
    const localScore = localStorage.getItem('Punts inicials');
    const storedScore = localScore ? parseInt(localScore, 10) : 0;
    return storedScore + this._score;
  }

  get highScore(): number {
    return this._highScore;
  }

  get lifes(): number {
    return this._lifes;
  }

  constructor(
    private _router: Router
  ) {
    this._highScore = parseInt(sessionStorage.getItem('highscore') || '0');
    console.log(this._highScore);
    // console.log(Number(localStorage.getItem('highScore')))
  }

  resetGame() {
    this._score = 0;
    this._lifes = 5;
  }

  increasePoints() {
    this._score += 10;
  }

  decreaseLifes() {
    this._lifes -= 1;
    if (this._lifes <= 0) {
      if (this._score > this._highScore) {
        const playerName = localStorage.getItem('Jugador') || '';
        const scoreData: ScoreData = {
          playerName: playerName,
          score: this._score
        };
        this.newHighScore(scoreData);
      }
      this._router.navigate(['/game/gameover']);
    }
  }

  newHighScore(scoreData: ScoreData) {
    this._highScore = scoreData.score;
    sessionStorage.setItem('highscore', String(this._highScore));

    const previousScoresJson = localStorage.getItem('previousScores');
    let previousScores: ScoreData[] = [];

    if (previousScoresJson) {
      previousScores = JSON.parse(previousScoresJson);
    }

    previousScores.push(scoreData);
    localStorage.setItem('previousScores', JSON.stringify(previousScores));
  }

  getPreviousScores(): ScoreData[] {
    const previousScoresJson = localStorage.getItem('previousScores');
    return previousScoresJson ? JSON.parse(previousScoresJson) : [];
  }
}

﻿export class MovieModel {
    public title: string;
    public year: string;
    public imdbID: string;
    public type: string;
    public poster: string;
}

export class MovieListModel {
    public search: MovieModel[];
    public totalResults: number;
    public response: string;
}
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Array<Livro> = [];

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: 'Clean Code: A handbook of Agile Software Craftmanship ',
        resumo: "Even bad code can function. But if code isn't clean, it can " +
          "bring a development organization to its knees. Every year, countless " + 
          "hours and significant resources are lost because of poorly written " +
          "code. But it doesn't have to be that way.",
        autores: ['Robert C. Martin'],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: 'Refactoring: Improving the Design of Existing code',
        resumo: 'Refactoring improves the design of existing code and enhances ' +
          'software maintainability, as well as making existing code easier to ' +
          'understand.',
        autores: ['Martin Fowler'],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        resumo: 'Software design thought leader and founder of Domain Language, ' +
          'Eric Evans, provides a systematic approach to domain-driven design, ' +
          'presenting an extensive set of design best practices, experience-based ' +
          'techniques, and fundamental principles that facilitate the development ' +
          'of software projects facing complex domains.',
        autores: ['Eric Evans'],
      },
    ];
  }

  obterLivros = (): Array<Livro> => {
    return this.livros;
  };

  incluir = (livro: Livro): void => {
    const codigo =
      this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    this.livros.push({ ...livro, codigo });
  };

  excluir = (codigo: number): void => {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    );
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  };
}
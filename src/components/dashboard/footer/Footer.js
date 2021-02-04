import React from 'react';

export default function Footer() {
  return (
    <div>
      {/* // <!-- Main Footer --> */}
      <footer className="main-footer">
        {/* <!-- To the right --> */}
        <div className="float-right d-none d-sm-inline">
          Fundação Oswaldo Cruz
        </div>
        {/* <!-- Default to the left --> */}
        <strong>
          Copyright &copy; 2020 <a href="https://www.fiocruz.br">Fiocruz</a>.
        </strong>{' '}
        Todos os direitos reservados.
      </footer>
    </div>
  );
}

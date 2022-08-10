import { StyledDiv, StyledContent } from "./styles";

export const About = () => {
	return (
		<>
			<StyledDiv>
				<h5>About</h5>
				<StyledContent>
					<p>O cliente XPTO precisa de uma landing page para divulgar a lista de candidatos a um concurso que estão a promover.</p>
					<p>Não partilharam connosco nenhum design em específico, pelo que deves inspirar-te no logotipo que te mando em anexo.</p>
					<p>Infelizmente é muito comum os clientes não providenciarem muitos dos recursos necessários para termos um ponto de partida. Neste sentido, tens liberdade para criar uma proposta ao cliente com o pouco que nos deram.</p>
					<p>Elaborando a única informação que temos:</p>
					<p>Layout:</p>
					<ul>
						<li>O cliente não está recetivo a frameworks. Deverás usar apenas HTML, CSS e javascript;</li>
						<li>O cliente pediu para que a plataforma tenha uma topbar, uma navbar e uma zona de conteúdo</li>
						<li>A topbar deve conter o logotipo à esquerda e a informação do cliente autenticado à direita (pode ser avatar genérico e nome)</li>
						<li>A sidebar, do lado DIREITO, deve conter o menu com a lista de páginas acessíveis na plataforma</li>
						<li>A sidebar deve poder esconder-se via botão “hamburger”</li>
						<li>A zona de conteúdo deve conter um título e o respetivo conteúdo</li>
						<li>Deverás reutilizar código na melhor das tuas capacidades (usar templates!)</li>
					</ul>
					<p>Conteúdo:</p>
					<ul>
						<li>A plataforma deverá ter uma página de “Acerca” que explica o âmbito do concurso</li>
						<li>A plataforma deverá ter uma página com uma lista de todos os candidatos que concorreram</li>
						<li>A plataforma deverá ter uma página com os candidatos que ganharam o concurso, dos vários que concorreram (ex. 1º, 2º e 3º classificado)</li>
						<li>A plataforma deverá ter uma página com o detalhe de cada candidato (via clique no candidato) com a sua informação e o respetivo prémio do seu lugar)</li>
						<li>Como o backend ainda está em desenvolvimento, podes usar a https://fakestoreapi.com para pedidos dummy</li>
					</ul>
				</StyledContent>
		</StyledDiv>
		</>
	)
};
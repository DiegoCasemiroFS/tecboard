import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Banner } from './componentes/Banner'
import { Tema } from './componentes/Tema'
import { CardEvento } from './componentes/CardEvento';

function App() {

    const temas = [
        { id: 1, nome: 'front-end' },
        { id: 2, nome: 'back-end' },
        { id: 3, nome: 'devops' },
        { id: 4, nome: 'inteligência artificial' },
        { id: 5, nome: 'data science' },
        { id: 6, nome: 'cloud' }
    ];

    const eventos = [
        {
            capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
            tema: temas[0],
            data: new Date(),
            titulo: 'Mulheres no front'
        }
    ]

    function adicionarEvento(evento) {
        eventos.push(evento);
        console.log("Eventos atualizados:", eventos);
    }

    return (
        <main>
            <header>
                <img src="/logo.png" alt="logo" />
            </header>
            <Banner />
            <FormularioDeEvento
                temas={temas}
                aoSubmeter={adicionarEvento}
            />
            {temas.map(function (item) {
                return (
                    <section key={item.id}>
                        <Tema tema={item} />
                        {eventos.map(function (item, indice) {
                            return <CardEvento evento={item} key={indice} />
                        })}

                    </section>
                )
            })

            }
        </main>

    )
}

export default App

import "./Forms.css";
import TextArea from '../TextArea';
import Dropdown from "../Dropdown";


const Forms = () => {

    const times = [

        'Furia',
        'Imperial',
        'Pain',
        'Liquid',
        'Faze',
        'Vitality',
        'Ence'
    ]
    return (

        <section className="forms">
            <form>
                <h2>Preencha os dados para criar o card</h2>
                <TextArea label="Nome" placeholder="Digite o seu nome" />
                <TextArea label="Cargo" placeholder="Digite o seu cargo" />
                <TextArea label="Imagem" placeholder="Digite o caminho de sua imagem" />
                <Dropdown label="Time"items={times}/>
            </form>
        </section>
    )
}

export default Forms
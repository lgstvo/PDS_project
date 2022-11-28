import React from "react";
import "./css/cadastro.css"

class Cadastro extends React.Component{
    render(){
        return (
        <div class="v811_553"><span class="v811_554">Marcaê</span>
            <div class="v811_555">
                <div class="v816_1545">
                    <div class="v816_1546"><span class="v816_1547">Sou aluno</span></div>
                </div>
                <div class="v816_1550">
                    <div class="v816_1551"><span class="v816_1552">Sou professor</span></div>
                </div>
                <div class="v816_1553">
                    <div class="v816_1531">
                    </div>
                </div>
                <div class="v811_556"><span class="v811_557">Cadastro</span><span class="v811_558">Informe seus
                        dados</span></div>
                <div class="v811_559">
                    <div class="name">
                        <label class="label-input"> Telefone <input class="campo_cadastro"  id="tel"></input></label>
                    </div>
                    <div class="name">
                        <label class="label-input">Senha<input class="campo_cadastro"  id="senha"></input></label>
                    </div>
                    <div class="name">
                        <label class="label-input">Confirmação Senha<input class="campo_cadastro" ></input></label>
                    </div>
                </div>
                <div class="v816_1532">
                    <div class="name">
                        <label class="label-input"> Nome <input class="campo_cadastro" id="nome"></input></label>
                    </div>
                    <div class="name">
                        <label class="label-input">Email<input class="campo_cadastro"  id="email"></input></label>
                    </div>
                    <div class="name">
                        <label class="label-input">Currículo<input class="campo_cadastro"  id="curriculo"></input></label>
                    </div>
                </div>
                <div class="name">
                    <button class="button_cadastrar" id="#button-login" onclick="addPerfil($('#nome').val(),false,$('#senha').val(),$('#email').val(),$('#tel').val(),$('#curriculo').val());" ><span class="v816_1547">Cadastrar</span></button>
                </div>
                <div class="name"></div>
            </div>
            <div class="v811_567">
                <div class="v811_568">
                    <div class="v811_569"><span class="v811_570">Sobre</span></div>
                </div>
                <div class="v811_572">
                    <div class="v811_573"><span class="v811_574">Home</span></div>
                </div>
                <div class="v811_575">
                    <div class="v811_576"><span class="v811_577">Aulas</span></div>
                </div><span class="v811_578">Professores </span>
            </div>
            <div class="v811_668">
                <div class="v811_669"><span class="v811_670">Conecte suas Redes</span><span class="v811_671">Conecte o
                        Marcaê com suas redes sociais preferidas :</span>
                </div>
                <div class="v811_682"><span class="v811_683">Info da Empresa</span>
                    <div class="v811_684"><span class="v811_685">Sobre Nós</span><span class="v811_686">Nossos
                            Planos</span><span class="v811_687">Estamos contratando !</span><span class="v811_688">Entre
                            em Contato conosco</span></div>
                </div>
                <div class="v811_689"><span class="v811_690">Vantagens Marcaê</span>
                    <div class="v811_691"><span class="v811_692">Informações Centralizadas</span><span
                            class="v811_693">Transparência Financeira</span><span class="v811_694">Fonte confiável e
                            validada</span><span class="v811_695">Espaço para diálogo e aprendizado</span></div>
                </div>
            </div>
        </div>

     );
 }
}
export default Cadastro;

import React from "react";
import "./css/login.css"

class Login extends React.Component{
    render(){
        return (
            <div className="v803_586">
            <div className="v803_588">
                <div className="v803_589"><span className="v803_590">Sign In</span><span className="v803_591">Digite seu email e senha para entrar</span></div>
                <div className="v803_592">
                    <div className="name">
                        <label  className="v816_1552">Email <input type="text" className="campo_login" id="#email" name="Email" /></label>
                    </div>
                    <div className="name">
                        <label  className="v816_1552">Senha <input type="text" className="campo_login" id="#pwd" name="Senha" /></label>
                    </div>
                </div>
                <div className="v803_595">
                </div>
                <div className="name">
                    <button className="v816_1546" id="#button-login" ><span className="v816_1547">Login</span></button>
                </div><span className="v803_599">Ainda não se cadastrou? Sign up</span>
            </div>
            <div className="v803_614">
                <div className="v803_615">
                    <div className="v803_616"></div>
                    <div className="v803_617">
                        <div className="v803_618"></div>
                    </div>
                </div>
                <div className="v803_694"><span className="v803_695">Agende as melhores aulas particulares!</span><span
                        className="v803_696">Inscreva-se já e tenha acesso a fóruns, comunidades, diversas possibilidades de
                        aulas e muito mais</span></div>
            </div>
            <div className="v803_703">
                <div className="v803_704"><span className="v803_705">Conecte suas Redes</span><span className="v803_706">Conecte o
                        Marcaê com suas
                        redes sociais preferidas :</span>
                </div>
                <div className="v803_717"><span className="v803_718">Info da Empresa</span>
                    <div className="v803_719"><span className="v803_720">Sobre Nós</span><span className="v803_721">Nossos
                            Planos</span><span className="v803_722">Estamos contratando!</span><span className="v803_723">Entre em
                            Contato conosco</span></div>
                </div>
                <div className="v803_724"><span className="v803_725">Vantagens Marcaê</span>
                    <div className="v803_726"><span className="v803_727">Informações Centralizadas</span><span
                            className="v803_728">Transparência Financeira</span><span className="v803_729">Fonte confiável e
                            validada</span><span className="v803_730">Espaço para diálogo e aprendizado</span></div>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;
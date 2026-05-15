sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("curriculo.project1.controller.View1", {
      onInit: function () {
        this.byId("_IDGenSwitch").setState(true);
        this.onChangeLanguage({ getParameter: () => true });
      },

      onChangeLanguage: function (oEvent) {
        const startDate = new Date(2022, 11);
        const currentDate = new Date();
        let totalMonths =
          (currentDate.getFullYear() - startDate.getFullYear()) * 12;
        totalMonths += currentDate.getMonth() - startDate.getMonth();

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        let i18n = this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle();
        let idioma = oEvent.getParameter("state");

        if (idioma) {
          // English
          this.byId("_IDGenTitle").setText(i18n.getText("titulo_en"));
          this.byId("_IDGenLabel").setText(i18n.getText("idioma_en"));
          this.byId("_IDGenIconTabFilter").setText(i18n.getText("resumo_en"));
          this.byId("_IDGenIconTabFilter1").setText(i18n.getText("experiencia_en"));
          this.byId("_IDGenIconTabFilter2").setText(i18n.getText("formacao_en"));
          this.byId("_IDGenIconTabFilter3").setText(i18n.getText("contatos_en"));
          this.byId("_IDGenText").setText("By Carlos Queiroz | SAP ABAP & Fiori Developer");

          this.byId("_IDGenGroupElement").setLabel("Profile");
          this.byId("_IDGenGroupElement1").setLabel("SAP Experience – Summary");
          this.byId("_IDGenGroupElement2").setLabel("General Information");

          this.byId("_IDGenText2").setText(
            `SAP ABAP & Fiori Developer with ${years} year${years !== 1 ? "s" : ""} and ${months} month${months !== 1 ? "s" : ""} of hands-on experience in SAP ECC and S/4HANA environments. Proven track record across AMS, improvement projects, and full implementation cycles — from requirements gathering through go-live and post-production support.`
          );

          this.byId("_IDGenText3").setText(
            `• Development in projects such as Accounting Reconciliation Cockpit and system migration extractors
• ABAP development: ALV, Smartforms (PDFs), ABAP OO, Module Pool, SAPScript
• Creation of views and update clusters
• Queries built via Eclipse
• Implementation of BAPIs, BADIs, BTEs, User Exits, Enhancements, and PI Proxy
• Advanced SELECTs with joins and program performance analysis
• Creation of CDS Views and Fiori Apps consuming CDS
• Fiori adaptation (Fiorization) of standard SAP transactions
• Knowledge of tables: FI, SD, MM, PP, EWM, and Guepardo Tax
• Debugging and adjustments in standard SAP processes
• Development of Fiori Freestyle and Fiori Elements applications`
          );

          this.byId("_IDGenText5").setText(
            `Date of Birth:       21.11.2005
────────────────────────────────────────────────────────────────────
Citizenship:         Brazilian
────────────────────────────────────────────────────────────────────
Residence:           Pomerode – SC, Brazil
────────────────────────────────────────────────────────────────────
Mobility:            National and International
────────────────────────────────────────────────────────────────────
Marital Status:      Single
────────────────────────────────────────────────────────────────────
Languages:           Portuguese – Native | English – Intermediate B2 (studying toward C2)
────────────────────────────────────────────────────────────────────`
          );

          this.byId("_IDGenLabel1").setText("Professional Experience – Summary");
          this.byId("_IDGenLabel2").setText("SAP Project Experience – Details");

          this.byId("_IDGenText1").setText(
            `Active across all project phases: requirements gathering, analysis, development, functional testing, and UAT approval.

• Glatz – Current consulting firm
• DFSpro IT Solutions
• Clients served: Kyly, Usina Coruripe, Sotreq, Unimed, Destro, Agrícola Alvorada, Grupo Bom Jesus, Arke, and others
• ABAP technical development and SAP system integration
• Active participation in delivery of technical specs, testing cycles, improvements, and post-go-live support`
          );

          this.byId("_IDGenText4").setText(
            `Company:         Sotreq
────────────────────────────────────────────────────────────────────
Duration:         8 months
────────────────────────────────────────────────────────────────────
Industry:         Caterpillar Machinery and Equipment
────────────────────────────────────────────────────────────────────
Project:          Accounting Reconciliation Cockpit
────────────────────────────────────────────────────────────────────
Role:             SAP ABAP Consultant
────────────────────────────────────────────────────────────────────

Development of a solution for analysis, reconciliation, and clearing of accounting accounts — identifying process inconsistencies and performing individualized adjustments for proper account clearing.


Company:         Kyly
────────────────────────────────────────────────────────────────────
Duration:         Ongoing (current)
────────────────────────────────────────────────────────────────────
Industry:         Textile
────────────────────────────────────────────────────────────────────
Project:          SAP S/4HANA Implementation
────────────────────────────────────────────────────────────────────
Role:             SAP ABAP/Fiori Consultant
────────────────────────────────────────────────────────────────────

Active participation in the SAP S/4HANA implementation project, focused on developing Fiori applications (Freestyle and Elements) and customizing standard processes through ABAP enhancements and adaptations.`
          );

          this.byId("_IDGenText8").setText(
            `• High School – Completed
• Systems Analysis and Development – In progress (Higher Education)
• SAP courses and training: ABAP, CDS Views, Fiori, SAP CAP, S/4HANA`
          );
        } else {
          // Português
          this.byId("_IDGenTitle").setText(i18n.getText("titulo_pt"));
          this.byId("_IDGenLabel").setText(i18n.getText("idioma_pt"));
          this.byId("_IDGenIconTabFilter").setText(i18n.getText("resumo_pt"));
          this.byId("_IDGenIconTabFilter1").setText(i18n.getText("experiencia_pt"));
          this.byId("_IDGenIconTabFilter2").setText(i18n.getText("formacao_pt"));
          this.byId("_IDGenIconTabFilter3").setText(i18n.getText("contatos_pt"));
          this.byId("_IDGenText").setText("Feito por Carlos Queiroz | Desenvolvedor SAP ABAP & Fiori");

          this.byId("_IDGenGroupElement").setLabel("Perfil");
          this.byId("_IDGenGroupElement1").setLabel("Experiência SAP – Sumário");
          this.byId("_IDGenGroupElement2").setLabel("Informações Gerais");

          this.byId("_IDGenText2").setText(
            `Desenvolvedor SAP ABAP & Fiori com ${years} ano${years !== 1 ? "s" : ""} e ${months} mês${months !== 1 ? "es" : ""} de experiência prática em ambientes SAP ECC e S/4HANA. Histórico comprovado em AMS, projetos de melhoria e ciclos completos de implementação — do levantamento de requisitos ao suporte pós go-live.`
          );

          this.byId("_IDGenText3").setText(
            `• Atuação em projetos como Cockpit de Conciliação Contábil e extratores de migração de sistemas
• Desenvolvimento ABAP com ALV, Smartforms (PDFs), ABAP OO, Module Pool, SAPScript
• Criação de visões e clusters de atualização
• Criação de queries via Eclipse
• Implementação de BAPIs, BADIs, BTEs, User Exits, Enhancements e Proxy PI
• SELECTs avançados com joins e análise de performance de programas
• Criação de CDS Views e Apps Fiori consumindo CDS
• Fiorização de transações padrão para Apps Fiori
• Conhecimento das tabelas: FI, SD, MM, PP, EWM e Guepardo Tax
• Debug e ajustes em processos padrão SAP
• Desenvolvimento de aplicativos Fiori Freestyle e Fiori Elements`
          );

          this.byId("_IDGenText5").setText(
            `Data de Nascimento:  21.11.2005
────────────────────────────────────────────────────────────────────
Cidadania:           Brasileiro
────────────────────────────────────────────────────────────────────
Residência:          Pomerode – SC, Brasil
────────────────────────────────────────────────────────────────────
Mobilidade:          Nacional e Internacional
────────────────────────────────────────────────────────────────────
Estado Civil:        Solteiro
────────────────────────────────────────────────────────────────────
Idiomas:             Português – Nativo | Inglês – Intermediário B2 (cursando até C2)
────────────────────────────────────────────────────────────────────`
          );

          this.byId("_IDGenLabel1").setText("Experiência Profissional – Sumário");
          this.byId("_IDGenLabel2").setText("Experiência em Projetos SAP – Detalhes");

          this.byId("_IDGenText1").setText(
            `Atuação em todas as fases do projeto: levantamento, análise, desenvolvimento, testes funcionais e homologação.

• Glatz – Consultoria atual
• DFSpro IT Solutions
• Empresas atendidas: Kyly, Usina Coruripe, Sotreq, Unimed, Destro, Agrícola Alvorada, Grupo Bom Jesus, Arke, entre outras
• Desenvolvimento técnico ABAP e integração de sistemas SAP
• Participação ativa na entrega de especificações técnicas, testes, melhorias e suporte técnico pós go-live`
          );

          this.byId("_IDGenText4").setText(
            `Empresa:          Sotreq
────────────────────────────────────────────────────────────────────
Duração:           8 meses
────────────────────────────────────────────────────────────────────
Ramo de Atuação:   Máquinas e Equipamentos Caterpillar
────────────────────────────────────────────────────────────────────
Projeto:           Cockpit de Conciliação Contábil
────────────────────────────────────────────────────────────────────
Função:            Consultor SAP ABAP
────────────────────────────────────────────────────────────────────

Implementação de solução para análise, conciliação e compensação de contas contábeis — identificando divergências nos processos e realizando ajustes individualizados para a devida compensação das contas.


Empresa:          Kyly
────────────────────────────────────────────────────────────────────
Duração:           Em andamento (atual)
────────────────────────────────────────────────────────────────────
Ramo de Atuação:   Têxtil
────────────────────────────────────────────────────────────────────
Projeto:           Implementação SAP S/4HANA
────────────────────────────────────────────────────────────────────
Função:            Consultor SAP ABAP/Fiori
────────────────────────────────────────────────────────────────────

Participação ativa no projeto de implementação do SAP S/4HANA com foco no desenvolvimento de aplicativos Fiori (Freestyle e Elements) e na personalização de processos padrão por meio de enhancements e adaptações ABAP.`
          );

          this.byId("_IDGenText8").setText(
            `• Ensino Médio – Concluído
• Análise e Desenvolvimento de Sistemas – Em andamento (Ensino Superior)
• Cursos e treinamentos SAP: ABAP, CDS Views, Fiori, SAP CAP, S/4HANA`
          );
        }
      },
    });
  }
);

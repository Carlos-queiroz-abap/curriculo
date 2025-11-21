sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("curriculo.project1.controller.View1", {
      onInit: function () {
        // Ativar o idioma inglês ao iniciar
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
          // Inglês
          this.byId("_IDGenTitle").setText(i18n.getText("titulo_en"));
          this.byId("_IDGenLabel").setText(i18n.getText("idioma_en"));
          this.byId("_IDGenIconTabFilter").setText(i18n.getText("resumo_en"));
          this.byId("_IDGenIconTabFilter1").setText(
            i18n.getText("experiencia_en")
          );
          this.byId("_IDGenIconTabFilter2").setText(
            i18n.getText("formacao_en")
          );
          this.byId("_IDGenIconTabFilter3").setText(
            i18n.getText("contatos_en")
          );
          this.byId("_IDGenText").setText(
            "By Carlos Queiroz | ABAP & Fiori Developer"
          );

          this.byId("_IDGenGroupElement2").setLabel("General information")
          this.byId("_IDGenGroupElement1").setLabel("SAP Experience – Summary")

          this.byId("_IDGenText2")
            .setText(`Professional with ${years} years and ${months} months of experience with SAP ABAP ECC and S/4HANA.
                                          Acting in improvements, projects, and AMS in the development of solutions focused on technical 
                                          efficiency and business requirements fulfillment.
        `);

          this.byId("_IDGenText3")
            .setText(`• Experience in projects such as accounting reconciliation panel and system migration extractors
                                          • ABAP development with ALV, Smartforms (PDFs), ABAP OO, Module Pool, SAPScript
                                          • Creation of views and update clusters
                                          • Queries built via Eclipse
                                          • Implementation of BAPIs, BADIs, BTEs, Enhancements, and PI Proxy
                                          • Use of advanced SELECTs with joins and performance analysis
                                          • Creation of CDS Views and Fiori Apps consuming CDS
                                          • Fiori adaptation of standard transactions
                                          • Knowledge of tables: FI, SD, MM, PP, EWM and Guepardo Tax
                                          • Debugging and adjustments in standard processes
                                          • Create Fiori Apps Freestyle And Elements
       
                                          `);

          this.byId("_IDGenText5").setText(`Date of Birth:         21.11.2005
                                          ────────────────────────────────────────────────────────────────────
                                          Citizenship:           Brazilian
                                          ────────────────────────────────────────────────────────────────────
                                          Residence:            Pomerode-SC
                                          ────────────────────────────────────────────────────────────────────
                                          Mobility:             National and International
                                          ────────────────────────────────────────────────────────────────────
                                          Marital Status:       Single
                                          ────────────────────────────────────────────────────────────────────
                                          Languages:            Portuguese - Native | English - Intermediate - B2 (studying until C2)
                                          ────────────────────────────────────────────────────────────────────
        `);

          this.byId("_IDGenLabel1").setText(
            "Professional Experience – Summary"
          );
          this.byId("_IDGenLabel2").setText(
            " SAP Project Experience – Details"
          );

          this.byId("_IDGenText1")
            .setText(`Experience in the phases of gathering, analysis, development, functional testing, and approval.

                                          • Glatz – Current consulting firm
                                          • DFSpro IT Solutions 
                                          • Served companies: Kyly, Usina Coruripe, Sotreq, Unimed, Destro, Agrícola Alvorada, Grupo Bom Jesus, Arke...
                                          • ABAP technical development and SAP system integration
                                          • Active participation in delivery of technical specs, testing, improvements, and technical support
        `);

          this.byId("_IDGenText4").setText(`Company:              Sotreq
                                          ────────────────────────────────────────────────────────────────────
                                          Duration:              8 months
                                          ────────────────────────────────────────────────────────────────────
                                          Industry:              Caterpillar Machinery and Equipment
                                          ────────────────────────────────────────────────────────────────────
                                          Project Description:   Accounting Reconciliation Cockpit
                                          ────────────────────────────────────────────────────────────────────
                                          Role:                  SAP ABAP Consultant
                                          ────────────────────────────────────────────────────────────────────

                                          Implementation of a solution for analysis, reconciliation, and clearing of accounting accounts,
                                          identifying process inconsistencies and performing adjustments individually for proper clearing.
                                          
 
                                          Company:              Kyly
                                          ────────────────────────────────────────────────────────────────────
                                          Duration:              At the moment
                                          ────────────────────────────────────────────────────────────────────
                                          Industry:              Textile
                                          ────────────────────────────────────────────────────────────────────
                                          Project Description:  SAP S/4HANA Implementation
                                          ────────────────────────────────────────────────────────────────────
                                          Role:                  SAP ABAP/Fiori Consultant
                                          ────────────────────────────────────────────────────────────────────

                                          Participating in the SAP S/4HANA implementation project focused on developing 
                                          Fiori Apps and customizing standard processes with ABAP.

        `);

          this.byId("_IDGenText8").setText(`• Completed high school
                                          • Currently studying Systems Analysis and Development
                                          • Various SAP ABAP, CDS, Fiori, and CAP courses
        `);
        } else {
          // Português
          this.byId("_IDGenTitle").setText(i18n.getText("titulo_pt"));
          this.byId("_IDGenLabel").setText(i18n.getText("idioma_pt"));
          this.byId("_IDGenIconTabFilter").setText(i18n.getText("resumo_pt"));
          this.byId("_IDGenIconTabFilter1").setText(
            i18n.getText("experiencia_pt")
          );
          this.byId("_IDGenIconTabFilter2").setText(
            i18n.getText("formacao_pt")
          );
          this.byId("_IDGenIconTabFilter3").setText(
            i18n.getText("contatos_pt")
          );
          this.byId("_IDGenText").setText(
            "Feito por Carlos Queiroz | Desenvolvedor ABAP & Fiori"
          );

          this.byId("_IDGenGroupElement2").setLabel("Informações Gerais")
          this.byId("_IDGenGroupElement1").setLabel("Experiência SAP – Sumário")

          this.byId("_IDGenText2")
            .setText(`Profissional com ${years} anos e ${months} meses de experiência com SAP ABAP ECC e S/4HANA. 
                                          Atuação em melhorias, projetos e AMS no desenvolvimento de soluções com foco 
                                          em eficiência técnica e atendimento de requisitos de negócio.
        `);

          this.byId("_IDGenText3")
            .setText(`• Atuação em projetos como painel de conciliação contábil e extratores de migração de sistemas
                                          • Desenvolvimento ABAP com ALV, Smartforms (PDFs), ABAP OO, Module Pool, SAPScript
                                          • Criação de visão e clusters de atualização 
                                          • Criação de querys via Eclipse 
                                          • Implementação de BAPIs, BADIs, BTEs, Enhancements e Proxy PI 
                                          • Uso de SELECTs avançados com joins e análise de performance de programas. 
                                          • Criação de CDS Views e APP Fiori consumindo CDS. 
                                          • Fiorização de transação para APPs Fiori 
                                          • Conhecimento das tabelas: FI, SD, MM PP, EWM e Guepardo Tax
                                          • Debug e ajustes em processos Standards
                                          • Criação de Aplicativos Fiori Freestyle e Elements
      
                                          `);

          this.byId("_IDGenText5").setText(`Data de nascimento:      21.11.2005
                                          ────────────────────────────────────────────────────────────────────
                                          Cidadania:               Brasileiro
                                          ────────────────────────────────────────────────────────────────────
                                          Local de Residência:     Pomerode-SC
                                          ────────────────────────────────────────────────────────────────────
                                          Mobilidade:              Internacional e Nacional
                                          ────────────────────────────────────────────────────────────────────
                                          Status Civil:            Solteiro
                                          ────────────────────────────────────────────────────────────────────
                                          Idiomas:                 Português - Nativo | Inglês - Intermediário - B2 (Cursando até C2)
                                          ────────────────────────────────────────────────────────────────────
        `);

          this.byId("_IDGenLabel1").setText(
            "Experiência Profissional – Sumário"
          );
          this.byId("_IDGenLabel2").setText(
            " Experiência em Projetos SAP – Detalhes"
          );

          this.byId("_IDGenText1")
            .setText(`atuação nas fases de levantamento, análise, desenvolvimento, testes funcionais e homologação. 

                                          • Glatz – Consultoria atual 
                                          • DFSpro IT Solutions 
                                          • Empresas atendidas: Kyly, Usina Coruripe, Sotreq, Unimed, Destro, Agrícola Alvorada, Grupo Bom Jesus, Arke...
                                          • Desenvolvimento técnico ABAP e integração de sistemas SAP 
                                          • Participação ativa na entrega de especificações técnicas, testes, melhorias e suporte técnico 
        `);

          this.byId("_IDGenText4").setText(`Empresa:                Sotreq
                                          ────────────────────────────────────────────────────────────────────
                                          Duração:                8 meses
                                          ────────────────────────────────────────────────────────────────────
                                          Ramo de Atuação:        Máquinas e Equipamentos Caterpillar
                                          ────────────────────────────────────────────────────────────────────
                                          Descrição do Projeto:   Cockpit de Conciliação Contábil
                                          ────────────────────────────────────────────────────────────────────
                                          Função:                 Consultor SAP ABAP
                                          ────────────────────────────────────────────────────────────────────

                                          Implementação de solução para análise, conciliação e compensação para as contas contábeis,
                                          onde possam ser identificados divergências nos processos e realizações de ajustes nas contas de forma
                                          individualizada para compensação  das contas.
                                          
                                          
                                          Empresa:              Kyly
                                          ────────────────────────────────────────────────────────────────────
                                          Duração:              Atualmente
                                          ────────────────────────────────────────────────────────────────────
                                          Ramo de Atuação:      Textil
                                          ────────────────────────────────────────────────────────────────────
                                          Descrição do Projeto: Implementação SAP S/4HANA 
                                          ────────────────────────────────────────────────────────────────────
                                          Função:               Consultor  SAP ABAP/Fiori 
                                          ────────────────────────────────────────────────────────────────────

                                         Participação no projeto de implementação do SAP S/4HANA com foco 
                                         no desenvolvimento de aplicativos Fiori e na personalização de processos padrão com ABAP.`);

          this.byId("_IDGenText8").setText(`• Ensino médio completo
                                          • Cursando Faculdade de análise desenvolvimento de Sistemas
                                          • Diversos cursos de SAP ABAP,CDS,Fiori e CAP
        `);
        }
      },
    });
  }
);

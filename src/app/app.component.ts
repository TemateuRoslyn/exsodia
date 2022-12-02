import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../styles.scss', './app.component.scss']
})
export class AppComponent{

  avantages = [
    {
      title: "GESTION SOLIDE DES PROJETS ET DES PROCESSUS",
      content: "Nos chefs de projet servent de point focal pour tous vos besoins liés au projet. Les chefs de projet sont impliqués dans l'ensemble du cycle de vie du projet pour planifier, organiser, contrôler et déployer des jalons clés, des livrables selon vos objectifs. De plus, tous les projets d'EXSODIA sont supervisés par notre responsable de l'audit et de l'application des processus, ainsi que de la mesure des processus existants par rapport aux mesures établies et à l'analyse et à la mise en œuvre des améliorations des processus."
    },
    {
      title: "ANALYSE APPROFONDIE DES EXIGENCES",
      content: "Chez EXSODIA nous accordons une attention particulière à la phase de découverte pour garantir que le produit final répond pleinement à vos attentes. Les analystes commerciaux d'EXSODIA définissent des moyens plus faciles d'atteindre ce dont vous avez besoin, tandis que les gestionnaires de projet identifient la méthodologie de développement et le modèle de coopération les plus appropriés, ainsi que la constitution de l'équipe de projet la plus efficace, et les experts technologiques travaillent sur la faisabilité technique et sélectionnent les technologies les plus efficaces."
    },
    {
      title: "QUALITÉ COMPLÈTE",
      content: "Nous avons un service d'AQ indépendant chargé de fournir une assurance qualité tout au long du cycle de vie de développement logiciel de chaque projet. En fonction de la taille de ce dernier, nous répartissons une équipe de test et définissons un calendrier d'AQ, qui nous permet d'optimiser la participation et les coûts du projet. Bien qu'indépendants en raison de leurs fonctions, nos experts en matière d'AQ travaillent en étroite coopération avec notre équipe de développement."
    },
    {
      title: "CONNAISSANCES À DÉVELOPPER",
      content: "Depuis notre création en 2019, nous avons construit une base de connaissances en travaillant sur des centaines de projets de développement. Nous avons absorbé les meilleures approches pour atteindre des performances maximales et la plus haute qualité lors de la réalisation de projets, en évitant une complexité redondante qui affecte à la fois le budget et le calendrier."
    },
    {
      title: "DEVOPS ET LIVRAISON CONTINUE",
      content: "Nous embrassons DevOps pour assurer la synergie entre le développement et les opérations en accordant une attention particulière aux principaux points de douleur dans vos besoins DevOps et en automatisant les processus de livraison de bout en bout tout en garantissant l'évolutivité et sécurité de votre infrastructure."
    },
    {
      title: "COMMUNICATION TRANSPARENTE",
      content: "La transparence permet à vous et à nous de voir en un coup d'œil, si nous sommes sur la bonne voie pour atteindre les objectifs ou si nous sommes bloqués dans une ou plusieurs directions, et d'éliminer ces bloqueurs. C'est pourquoi, dès le lancement du projet, nous sommes d'accord avec vous sur un plan de communication adapté à vos besoins pour travailler à différents niveaux – de l'équipe de base aux parties prenantes de la gestion."
    }
  ]

  title = 'exsodia-template';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      1000: {
        items: 3
      },
    },
    nav: false
  }

}

/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){



        this.load.image('filterFilm1', 'assets/level/filters/film/frame-1.png');
        this.load.image('filterFilm2', 'assets/level/filters/film/frame-2.png');
        this.load.image('filterFilm3', 'assets/level/filters/film/frame-3.png');

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');
        // background
        this.load.image('fond', 'assets/fond.jpg');
        // éléments rajoué

        for(let i=1;i<=3;i++){
            this.load.image('caillou'+i, 'assets/new/caillou'+i+'.png');
        }
        this.load.image('maison', 'assets/new/maison2.png');

        for(let i=1;i<=2;i++){
            this.load.image('arbreMort'+i, 'assets/new/arbreMort'+i+'.png');
        }

        // éléments de neige
        for(let i=1;i<7;i++){
            this.load.image('neige'+i, 'assets/new/neige'+i+'.png');
        }
        this.load.image('neigeMaison', 'assets/new/neigeMaison.png');
        for(let i=1;i<=5;i++){
            this.load.image('Snowframe-'+i, 'assets/weather/snow/frame'+i+'.png');
        }
        this.load.image('neigeEffet', 'assets/new/neigeEffet.png');

    }

    /**
     * r
     */
    create(){

        /**
         * Fond
         * @type {Phaser.GameObjects.Sprite}
         */
        // fond

        this.add.image(0,0, 'fond').setOrigin(0,0);

       this.initKeyboard()




        /**
         * contient tous les élements rajouté
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let maison=this.add.image(135,-3, 'maison').setOrigin(0,0);
        this.bg2Container.add(maison);
        maison.scale=0.6
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */


        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments de neige
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-300,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);


        // arbre
        let arbreMort1_1=this.add.image(85,160, 'arbreMort1').setOrigin(0,0);
        arbreMort1_1.scale=0.5
        let arbreMort1_2=this.add.image(415,120, 'arbreMort1').setOrigin(0,0);
        arbreMort1_2.scale=0.5

        let arbreMort2_1=this.add.image(190,10, 'arbreMort2').setOrigin(0,0);
        arbreMort2_1.scale=0.5
        let arbreMort2_2=this.add.image(390,160, 'arbreMort2').setOrigin(0,0);
        arbreMort2_2.scale=0.5




        //neige

        let neige7_1=this.add.image(270,80, 'neige6').setOrigin(0,0);
        neige7_1.scale=0.5
        let neige7_2=this.add.image(300,185, 'neige6').setOrigin(0,0);
        neige7_2.scale=0.5

        let neige3_1=this.add.image(376,114, 'neige3').setOrigin(0,0);
        neige3_1.scale=0.5
        let neige3_2=this.add.image(360,4, 'neige3').setOrigin(0,0);
        neige3_2.scale=0.5
        let neige3_3=this.add.image(399,-1, 'neige3').setOrigin(0,0);
        neige3_3.scale=0.5

        let neige4_1=this.add.image(454,133, 'neige4').setOrigin(0,0);
        neige4_1.scale=0.5
        let neige4_2=this.add.image(336,43, 'neige4').setOrigin(0,0);
        neige4_2.scale=0.5
        let neige4_3=this.add.image(5,36, 'neige4').setOrigin(0,0);
        neige4_3.scale=0.5

        let neige5_1=this.add.image(410,52, 'neige5').setOrigin(0,0);
        neige5_1.scale=0.5
        let neige5_2=this.add.image(322,0, 'neige5').setOrigin(0,0);
        neige5_2.scale=0.5
        let neige5_3=this.add.image(13,95, 'neige5').setOrigin(0,0);
        neige5_3.scale=0.5

        let neige1_1=this.add.image(78,100, 'neige1').setOrigin(0,0);
        neige1_1.scale=0.5
        let neige1_2=this.add.image(50,66, 'neige1').setOrigin(0,0);
        neige1_2.scale=0.5
        let neige1_3=this.add.image(233,5, 'neige1').setOrigin(0,0);
        neige1_3.scale=0.5

        let neige2_1=this.add.image(212,175, 'neige2').setOrigin(0,0);
        neige2_1.scale=0.5
        let neige2_2=this.add.image(189,235, 'neige2').setOrigin(0,0);
        neige2_2.scale=0.5
        let neige2_3=this.add.image(440,300, 'neige2').setOrigin(0,0);
        neige2_3.scale=0.5



        //maison

        let neigeMaison=this.add.image(135,-3, 'neigeMaison').setOrigin(0,0);
        neigeMaison.scale=0.6


        // pierre
        let caillou1_1=this.add.image(120,100, 'caillou1').setOrigin(0,0);
        caillou1_1.scale=0.5
        let caillou1_2=this.add.image(115,110, 'caillou1').setOrigin(0,0);
        caillou1_2.scale=0.5

        let caillou1_3=this.add.image(300,110, 'caillou1').setOrigin(0,0);
        caillou1_3.scale=0.5
        let caillou1_4=this.add.image(300,60, 'caillou1').setOrigin(0,0);
        caillou1_4.scale=0.5

        let caillou1_5=this.add.image(56,200, 'caillou1').setOrigin(0,0);
        caillou1_5.scale=0.5
        let caillou1_6=this.add.image(56,207, 'caillou1').setOrigin(0,0);
        caillou1_6.scale=0.5

        let caillou1_7=this.add.image(440,120, 'caillou1').setOrigin(0,0);
        caillou1_7.scale=0.5
        let caillou1_8=this.add.image(420,80, 'caillou1').setOrigin(0,0);
        caillou1_8.scale=0.5

        // pierre + neige

        let caillou2_1=this.add.image(120,100, 'caillou2').setOrigin(0,0);
        caillou2_1.scale=0.5
        let caillou3_1=this.add.image(115,110, 'caillou3').setOrigin(0,0);
        caillou3_1.scale=0.5

        let caillou2_2=this.add.image(300,110, 'caillou2').setOrigin(0,0);
        caillou2_2.scale=0.5
        let caillou3_2=this.add.image(300,60, 'caillou3').setOrigin(0,0);
        caillou3_2.scale=0.5




        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions


        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */

        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */

        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */

        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */

        //let neigeEffet=this.add.image(100,95, 'neigeEffet').setOrigin(0,0);




        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');


        this.filterNeige = this.add.sprite(0, 0, 'filterNeige').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'snow',
            frames: [
                {key:'Snowframe-1'},
                {key:'Snowframe-2'},
                {key:'Snowframe-3'},
                {key:'Snowframe-4'},
                {key:'Snowframe-5'},
            ],
            frameRate: 10,
            repeat: -1 // -1 correspond a l'infini
        });
        this.filterNeige.play('snow');
        this.filterNeige.visible=false;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;


    }

   initKeyboard(){
       let me=this;
       this.input.keyboard.on('keydown', function(kevent)
       {
           switch (kevent.keyCode)
           {
               case Phaser.Input.Keyboard.KeyCodes.I:

                   if (me.filterNeige.visible === true) {
                       me.filterNeige.setVisible(false)
                   } else {
                       me.filterNeige.setVisible(true)
                   }
                   break;
           }

       });
       this.input.keyboard.on('keyup', function(kevent)
       {
           switch (kevent.keyCode)
           {

           }
       });
   }
    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){

        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}

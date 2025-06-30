const gestures = [
  // ---------- 1-7: originales ----------
  {
    id: 1,
    name: "Prendere o lasciare",
    meaning_es: "Tómalo o déjalo / Ultimátum",
    meaning_it: "Prendere o lasciare / Ultimatum",
    description_es:
      "Las dos manos, con los dedos abiertos, se acercan hasta que las puntas se tocan: señala que ha llegado el momento de decidir.",
    description_it:
      "Le due mani, con le dita aperte, si avvicinano finché le punte si toccano: indica che è ora di decidere.",
    category_es: "Ultimátum / Decisión",
    category_it: "Ultimato / Decisione",
    image: "assets/pagina13_img1_prendere_o_lasciare.png",
  },
  {
    id: 2,
    name: "Pollice alzato",
    meaning_es: "Todo bien / De acuerdo / OK",
    meaning_it: "Tutto bene / D'accordo / OK",
    description_es:
      "Pulgar hacia arriba con la mano en puño a la altura del hombro: expresa aprobación o conformidad.",
    description_it:
      "Pollice rivolto in alto con la mano a pugno all'altezza della spalla: esprime approvazione o conformità.",
    category_es: "Aprobación",
    category_it: "Approvazione",
    image: "assets/pagina13_img2_pollice_alzato.png",
  },
  {
    id: 3,
    name: "Occhiolino",
    meaning_es: "Complicidad / Entendido",
    meaning_it: "Complicità / Inteso",
    description_es:
      "Guiño claro de un ojo para indicar complicidad o un mensaje implícito.",
    description_it:
      "Strizzata evidente di un occhio per mostrare complicità o un messaggio implicito.",
    category_es: "Complicidad",
    category_it: "Complicità",
    image: "assets/pagina13_img3_occhiolino_1.png",
  },
  {
    id: 4,
    name: "La O / OK",
    meaning_es: "De acuerdo / Correcto",
    meaning_it: "D'accordo / Tutto bene",
    description_es:
      "Pulgar e índice forman una O; la mano al hombro con palma hacia dentro comunica que todo está correcto.",
    description_it:
      "Pollice e indice formano una O; la mano all'altezza della spalla con palmo verso l'interno segnala che tutto va bene.",
    category_es: "Aprobación",
    category_it: "Approvazione",
    image: "assets/pagina13_img4_la_o_1.png",
  },
  {
    id: 5,
    name: "Proprio questo!",
    meaning_es: "¡Exacto! / ¡Esto es!",
    meaning_it: "Proprio questo!",
    description_es:
      "Mano abierta junto al rostro vibra hacia delante y atrás para enfatizar una idea o avalar con entusiasmo.",
    description_it:
      "Mano aperta accanto al volto vibra avanti e indietro per enfatizzare o avallare con entusiasmo.",
    category_es: "Énfasis",
    category_it: "Enfasi",
    image: "assets/pagina13_img5_proprio_questo.png",
  },
  {
    id: 6,
    name: "Giocondo",
    meaning_es: "¡No soy tonto! / Astuto",
    meaning_it: "Non sono mica scemo!",
    description_es:
      "La punta del índice recorre la frente horizontalmente: indica astucia o haber comprendido la situación.",
    description_it:
      "La punta dell'indice percorre la fronte in orizzontale: segnala astuzia o che si è capito.",
    category_es: "Astucia / Ironía",
    category_it: "Astuzia / Ironia",
    image: "assets/pagina13_img6_giocondo.png",
  },
  {
    id: 7,
    name: "Mando un bacio",
    meaning_es: "Lanzar un beso / Afecto",
    meaning_it: "Lanciare un bacio / Affetto",
    description_es:
      "Índice toca los labios y se aleja como lanzando un beso: expresa cariño o gratitud.",
    description_it:
      "L'indice tocca le labbra e poi si allontana come per lanciare un bacio: esprime affetto o gratitudine.",
    category_es: "Afecto",
    category_it: "Affetto",
    image: "assets/pagina13_img7_mando_un_bacio_1.png",
  },

  {
    id: 8,
    name: "Mano a borsa",
    meaning_es: "¡Qué bueno! / Delicioso",
    meaning_it: "È buono! / Delizioso",
    description_es:
      "Con las puntas de los dedos unidas, la mano baja y se abre como una flor para elogiar la excelencia de algo.",
    description_it:
      "Con le dita unite a grappolo, la mano scende aprendosi come un fiore per lodare la bontà o la bellezza di qualcosa.",
    category_es: "Apreciación",
    category_it: "Apprezzamento",
    image: "assets/pagina14_img6_mano_a_borsa_3.png",
  },
  {
    id: 9,
    name: "Al bacio!",
    meaning_es: "¡Excelente! / Al punto",
    meaning_it: "Ottimo! / Al bacio!",
    description_es:
      "Las puntas unidas de los dedos besan los labios y se alejan rápido: indica que algo es perfecto o exquisito.",
    description_it:
      "Le dita unite toccano le labbra che le ‘baciano’ e poi si allontanano: segnala che qualcosa è perfetto o squisito.",
    category_es: "Perfección",
    category_it: "Perfezione",
    image: "assets/pagina14_img7_al_bacio.png",
  },
  {
    id: 10,
    name: "Più o meno",
    meaning_es: "Más o menos / Así así",
    meaning_it: "Più o meno / Così così",
    description_es:
      "La mano horizontal oscila con un temblor amplio frente al hombro para expresar aproximación o indiferencia.",
    description_it:
      "La mano orizzontale oscilla con ampio tremolio davanti alla spalla per indicare approssimazione o indifferenza.",
    category_es: "Aproximación",
    category_it: "Approssimazione",
    image: "assets/pagina14_img8_piu_o_meno.png",
  },
  {
    id: 11,
    name: "Applauso",
    meaning_es: "¡Bravo! / Aplauso",
    meaning_it: "Bravo! / Applauso",
    description_es:
      "Las dos manos golpean delante del pecho para mostrar admiración o aprobación.",
    description_it:
      "Le due mani battono davanti al torace per mostrare ammirazione o approvazione.",
    category_es: "Aplauso / Aprobación",
    category_it: "Apprezzamento",
    image: "assets/pagina14_img9_applauso_1.png",
  },
  {
    id: 12,
    name: "È un dritto!",
    meaning_es: "¡Ese es listo! / Avispado",
    meaning_it: "È un dritto!",
    description_es:
      "Pulgar pasa de arriba abajo por la mejilla: alaba la astucia de alguien.",
    description_it:
      "Il pollice sfiora dall'alto in basso la guancia: elogia l'astuzia di qualcuno.",
    category_es: "Astucia",
    category_it: "Astuzia",
    image: "assets/pagina14_img10_e_un_dritto.png",
  },
  {
    id: 13,
    name: "Mano a borsa (Atención)",
    meaning_es: "¡Ojo! / Presta atención",
    meaning_it: "Fai attenzione",
    description_es:
      "Con los dedos unidos y palma arriba, la mano sube y baja lentamente para pedir atención.",
    description_it:
      "Con le dita unite e palmo in su, la mano sale e scende lentamente per richiamare l'attenzione.",
    category_es: "Advertencia",
    category_it: "Attenzione",
    image: "assets/pagina14_img13_mano_a_borsa_7.png",
  },
  {
    id: 14,
    name: "Mano a borsa (Pieno)",
    meaning_es: "¡Estaba llenísimo!",
    meaning_it: "Era pieno così!",
    description_es:
      "Con palma arriba, los dedos abren y cierran varias veces para indicar aglomeración o lleno total.",
    description_it:
      "Palmo in su, le dita si aprono e chiudono più volte per indicare folla o estrema pienezza.",
    category_es: "Aglomeración",
    category_it: "Affollamento",
    image: "assets/pagina14_img11_mano_a_borsa_6.png",
  },
  {
    id: 15,
    name: "Amici per la pelle",
    meaning_es: "Amigos inseparables",
    meaning_it: "Amici per la pelle",
    description_es:
      "Los meñiques de ambas manos se enganchan para simbolizar una amistad muy estrecha.",
    description_it:
      "I mignoli delle due mani si agganciano a indicare un legame di amicizia strettissimo.",
    category_es: "Amistad / Complicidad",
    category_it: "Amicizia / Intesa",
    image: "assets/pagina14_img12_amici_per_la_pelle.png",
  },
  {
    id: 16,
    name: "Mano a taglio",
    meaning_es: "¡Me cae fatal!",
    meaning_it: "Mi sta qui!",
    description_es:
      "Mano en filo da ligeros golpecitos al estómago: expresa antipatía o pesadez.",
    description_it:
      "Mano di taglio batte leggermente sullo stomaco: esprime antipatia o peso.",
    category_es: "Antipatía / Fastidio",
    category_it: "Antipatia / Fastidio",
    image: "assets/pagina14_img1_mano_a_taglio.png",
  },
  {
    id: 17,
    name: "Indice rotante",
    meaning_es: "¡Buenísimo!",
    meaning_it: "È buonissimo!",
    description_es:
      "La punta del índice gira sobre la mejilla para elogiar la delicia de un plato.",
    description_it:
      "La punta dell'indice ruota sulla guancia per lodare la bontà di un cibo.",
    category_es: "Apreciación",
    category_it: "Apprezzamento",
    image: "assets/pagina14_img2_indice_rotante.png",
  },
  {
    id: 18,
    name: "Pollice su guancia",
    meaning_es: "¡Qué rico! / ¡Qué lindo!",
    meaning_it: "Che bontà! / Che bello!",
    description_es:
      "Pulgar recorre la mejilla de arriba abajo para indicar que algo gusta mucho (comida u otra cosa).",
    description_it:
      "Il pollice scorre la guancia dall'alto in basso per dire che qualcosa piace molto (cibo o altro).",
    category_es: "Apreciación",
    category_it: "Apprezzamento",
    image: "assets/pagina14_img3_pollice_su_guancia.png",
  },
  {
    id: 19,
    name: "La O baciata",
    meaning_es: "¡Delicioso! / De chef",
    meaning_it: "Al bacio!",
    description_es:
      "Pulgar e índice forman una O que besa los labios y se aleja para remarcar la perfección de un sabor.",
    description_it:
      "Pollice e indice a O baciano le labbra e si allontanano per rimarcare la perfezione di un sapore.",
    category_es: "Perfección",
    category_it: "Perfezione",
    image: "assets/pagina14_img4_la_o_baciata.png",
  },
  // {
  //   // TODO: Revisar
  //   id: 20,
  //   name: "La O verticale di lato",
  //   meaning_es: "¡Riquísimo!",
  //   meaning_it: "Delizioso",
  //   description_es:
  //     "La misma O se desplaza lateralmente desde los labios para elogiar sabor o calidad.",
  //   description_it:
  //     "La stessa O si sposta lateralmente dalle labbra per lodare sapore o qualità.",
  //   category_es: "Apreciación",
  //   category_it: "Apprezzamento",
  //   image: "assets/pagina15_img5_la_o_verticale_di_lato.png",
  // },
  {
    id: 21,
    name: "Mani avanti (Calma)",
    meaning_es: "¡Calma! / Tranquilos",
    meaning_it: "Calma! / Andiamoci piano!",
    description_es:
      "Palmas hacia delante o hacia abajo se mueven suavemente para apaciguar una disputa.",
    description_it:
      "Palmi avanti o verso il basso che si muovono dolcemente per placare una lite.",
    category_es: "Calma",
    category_it: "Calma",
    image: "assets/pagina15_img6_mani_avanti.png",
  },
  {
    id: 22,
    name: "Ventaglio",
    meaning_es: "¡Qué calor!",
    meaning_it: "Che caldo!",
    description_es:
      "La mano se abanea frente a la mejilla para expresar sensación de calor.",
    description_it:
      "La mano si sventola vicino alla guancia per esprimere caldo.",
    category_es: "Calor",
    category_it: "Calura",
    image: "assets/pagina15_img7_ventaglio.png",
  },
  {
    id: 23,
    name: "Da così a così",
    meaning_es: "Cambió por completo",
    meaning_it: "È cambiato da così a così!",
    description_es:
      "La mano gira la palma de abajo arriba para mostrar un cambio radical.",
    description_it:
      "La mano ruota dal palmo in giù al palmo in su per indicare un cambiamento radicale.",
    category_es: "Cambio",
    category_it: "Cambiamento",
    image: "assets/pagina15_img8_da_cosi_cosi.png",
  },
  {
    id: 24,
    name: "A piedi",
    meaning_es: "Ir / Vamos a pie",
    meaning_it: "Vai a piedi? / Vado a piedi",
    description_es:
      "Índice y medio 'caminan' simulando piernas para indicar desplazamiento a pie.",
    description_it:
      "Indice e medio 'camminano' come gambe per indicare spostamento a piedi.",
    category_es: "Movimiento",
    category_it: "Camminata",
    image: "assets/pagina15_img9_a_piedi.png",
  },
  {
    id: 25,
    name: "Marameo!",
    meaning_es: "¡Toma! / Burlarse",
    meaning_it: "Marameo!",
    description_es:
      "Pulgar en la nariz y dedos abanican: gesto infantil de burla.",
    description_it:
      "Pollice sul naso e dita che si muovono: gesto infantile di scherno.",
    category_es: "Burla",
    category_it: "Canzonatura",
    image: "assets/pagina15_img10_marameo.png",
  },
  {
    id: 26,
    name: "Vieni un po' qui!",
    meaning_es: "Ven aquí / Acércate",
    meaning_it: "Vieni qui!",
    description_es:
      "Dedo índice se flexiona varias veces hacia el gestante para llamar a alguien con cierta confianza.",
    description_it:
      "Indice si piega più volte verso il gestente per chiamare qualcuno con familiarità.",
    category_es: "Llamada",
    category_it: "Chiamata",
    image: "assets/pagina15_img11_vieni_un_po_qui_1.png",
  },
  {
    id: 27,
    name: "Mano che sventola 1",
    meaning_es: "¡Ven! (mano palmada)",
    meaning_it: "Vieni! (mano bassa)",
    description_es:
      "Palma hacia abajo se acerca y aleja con la muñeca para invitar a acercarse.",
    description_it:
      "Palmo in giù che si avvicina e allontana col polso per invitare ad avvicinarsi.",
    category_es: "Llamada",
    category_it: "Chiamata",
    image: "assets/pagina15_img12_mano_che_sventola_1.png",
  },
  {
    id: 28,
    name: "All'occhio!",
    meaning_es: "¡Cuidado! / Ojo",
    meaning_it: "Occhio! / Stai all'occhio",
    description_es:
      "Índice baja ligeramente el párpado inferior para advertir estar alerta.",
    description_it:
      "Indice abbassa leggermente la palpebra inferiore per avvertire di stare attenti.",
    category_es: "Advertencia",
    category_it: "Attenzione",
    image: "assets/pagina15_img13_all_occhio.png",
  },
  {
    id: 29,
    name: "Ticchettio con le dita",
    meaning_es: "Impaciencia / ¿Cuándo?",
    meaning_it: "Quando arriva? / Tic tac",
    description_es:
      "Los dedos golpean la mesa en cascada imitando el tic-tac de un reloj.",
    description_it:
      "Le dita battono sul tavolo a cascata imitando il ticchettio dell'orologio.",
    category_es: "Espera / Impaciencia",
    category_it: "Attesa",
    image: "assets/pagina15_img14_ticchettio_con_le_dita_1.png",
  },
  {
    id: 30,
    name: "Mano a borsa (Marioneta)",
    meaning_es: "¿Y yo qué? / Me dejaron fuera",
    meaning_it: "E io che sono, una marionetta?",
    description_es:
      "Mano con dedos unidos gira de derecha a izquierda como diciendo que lo manejan sin contar con él.",
    description_it:
      "Mano a grappolo ruota da destra a sinistra per lamentarsi di essere tagliato fuori.",
    category_es: "Queja / Excluido",
    category_it: "Autoidentificación / Lamento",
    image: "assets/pagina15_img1_mano_a_borsa_9.png",
  },
  {
    id: 31,
    name: "Io (pecho)",
    meaning_es: "Yo",
    meaning_it: "Io",
    description_es:
      "Índice sale del puño y se apoya en el pecho para señalarse a sí mismo.",
    description_it:
      "Indice esce dal pugno e tocca il petto per indicare se stessi.",
    category_es: "Deixis personal",
    category_it: "Deissi personale",
    image: "assets/pagina15_img2_io.png",
  },
  {
    id: 32,
    name: "La zuppetta",
    meaning_es: "Aprovechar / Mojar pan",
    meaning_it: "La zuppetta / Ci hanno bagnato il becco",
    description_es:
      "Mano con dedos unidos palma abajo sube y baja como 'mojando' para indicar que alguien se beneficia.",
    description_it:
      "Mano a grappolo palmo in giù sale e scende come 'intingere' per dire che qualcuno ne approfitta.",
    category_es: "Ventaja / Aprovecho",
    category_it: "Avvantaggiamento",
    image: "assets/pagina15_img3_la_zuppetta.png",
  },
  {
    id: 33,
    name: "Culla",
    meaning_es: "Hay un bebé / Mecer",
    meaning_it: "C'è un bambino!",
    description_es:
      "Brazos forman un círculo y se balancean como meciendo a un bebé.",
    description_it:
      "Le braccia formano un cerchio oscillando come per cullare un neonato.",
    category_es: "Niños / Ternura",
    category_it: "Bambino / Tenerezza",
    image: "assets/pagina15_img4_culla.png",
  },
  {
    id: 34,
    name: "La O orizzontale di lato",
    meaning_es: "¡Bellísima!",
    meaning_it: "È bellissima!",
    description_es:
      "Pulgar e índice en O se deslizan horizontalmente a la altura del estómago para elogiar la belleza.",
    description_it:
      "Pollice e indice a O scorrono in orizzontale all'altezza dello stomaco per lodare la bellezza.",
    category_es: "Belleza",
    category_it: "Bellezza",
    image: "assets/pagina15_img5_la_o_orizzontale_di_lato.png",
  },
  {
    id: 35,
    name: "(Auto)stretta di mano",
    meaning_es: "¡Felicidades! (a distancia)",
    meaning_it: "Congratulazioni!",
    description_es:
      "Las propias manos se dan la mano para felicitarse o felicitar a distancia.",
    description_it:
      "Le due mani si stringono fra loro per congratularsi a distanza.",
    category_es: "Felicitación",
    category_it: "Congratulazioni",
    image: "assets/pagina16_img13_auto_stretta_di_mano.png",
  },
  {
    id: 36,
    name: "Indici l'uno contro l'altro (Contrasto)",
    meaning_es: "Esos dos no se soportan",
    meaning_it: "Quei due non si sopportano",
    description_es:
      "Las puntas de los índices se tocan repetidamente para mostrar conflicto o enemistad.",
    description_it:
      "Le punte degli indici si toccano ripetutamente a indicare contrasto o inimicizia.",
    category_es: "Contraste / Pelea",
    category_it: "Contrasto / Inimicizia",
    image: "assets/pagina16_img1_indici_luno_contro_laltro_2.png",
  },
  {
    id: 37,
    name: "Qui dietro",
    meaning_es: "Aquí detrás",
    meaning_it: "Qui dietro",
    description_es:
      "Pulgar sobre el hombro apunta detrás para indicar posición posterior.",
    description_it:
      "Il pollice sopra la spalla indica dietro per segnalare una posizione posteriore.",
    category_es: "Deixis espacial",
    category_it: "Deissi spaziale",
    image: "assets/pagina16_img2_qui_dietro.png",
  },
  {
    id: 38,
    name: "Indice puntato",
    meaning_es: "¡Ese! / ¡Tú!",
    meaning_it: "Quello! / È lui!",
    description_es:
      "Índice extendido señala a una persona u objeto: puede considerarse poco educado.",
    description_it:
      "Indice teso punta qualcuno o qualcosa: può essere ritenuto poco educato.",
    category_es: "Deixis",
    category_it: "Deissi",
    image: "assets/pagina16_img3_indice_puntato.png",
  },
  {
    id: 39,
    name: "Larghezza",
    meaning_es: "Ancho así",
    meaning_it: "Largo così!",
    description_es:
      "Palmas enfrentadas se acercan o alejan para ilustrar una medida de anchura.",
    description_it:
      "Palmi contrapposti si avvicinano o si allontanano per illustrare una larghezza.",
    category_es: "Deixis",
    category_it: "Deissi",
    image: "assets/pagina16_img4_larghezza.png",
  },
  {
    id: 40,
    name: "Io (variante)",
    meaning_es: "Yo (reiteración)",
    meaning_it: "Io",
    description_es:
      "La variante general del índice al pecho para auto-identificarse.",
    description_it:
      "Variante comune dell'indice sul petto per auto-identificarsi.",
    category_es: "Deixis personal",
    category_it: "Deissi personale",
    image: "assets/pagina16_img5_io.png",
  },
  {
    id: 41,
    name: "Tu",
    meaning_es: "Tú",
    meaning_it: "Tu",
    description_es:
      "Índice apunta directamente al interlocutor para identificarlo.",
    description_it:
      "Indice punta direttamente l'interlocutore per identificarlo.",
    category_es: "Deixis personal",
    category_it: "Deissi personale",
    image: "assets/pagina16_img3_indice_puntato.png",
  },
  {
    id: 42,
    name: "Poi",
    meaning_es: "Luego / Después",
    meaning_it: "A dopo",
    description_es:
      "Índice gira en círculos hacia adelante para indicar 'más tarde'.",
    description_it:
      "Indice ruota in senso orario davanti al corpo per indicare 'più tardi'.",
    category_es: "Deixis temporal",
    category_it: "Deissi temporale",
    image: "assets/pagina16_img6_poi.png",
  },
  {
    id: 43,
    name: "Mano che sventola 2",
    meaning_es: "¡Ven! (palma arriba)",
    meaning_it: "Vieni! (palmo su)",
    description_es:
      "Palma hacia el gestante se flexiona para llamar o guiar a alguien.",
    description_it:
      "Palmo verso il gestente si flette per chiamare o guidare qualcuno.",
    category_es: "Llamada",
    category_it: "Chiamata",
    image: "assets/pagina16_img7_mano_che_sventola_2.png",
  },
  {
    id: 44,
    name: "Braccio che sventola",
    meaning_es: "¡Aquí! / ¡Date prisa!",
    meaning_it: "Ehi! / Presto!",
    description_es:
      "Brazo entero se alza y baja amplificando la llamada, útil a distancia.",
    description_it:
      "Il braccio intero si alza e abbassa per amplificare il richiamo a distanza.",
    category_es: "Llamada",
    category_it: "Chiamata",
    image: "assets/pagina16_img8_braccio_che_sventola.png",
  },
  {
    id: 45,
    name: "Mano a becco",
    meaning_es: "Puro bla bla / Hablar por hablar",
    meaning_it: "Quaquaraquà / Aria fritta!",
    description_es:
      "Dedos oponiéndose al pulgar abren y cierran, imitando un pico que parlotea sin sentido.",
    description_it:
      "Dita opposte al pollice si aprono e chiudono imitandone il becco che blatera.",
    category_es: "Cháchara",
    category_it: "Ciancia",
    image: "assets/pagina16_img9_mano_a_becco.png",
  },
  {
    id: 46,
    name: "Fight! (indici 1)",
    meaning_es: "¡A pelear!",
    meaning_it: "Fight!",
    description_es:
      "Índices se tocan una sola vez para dar inicio a un combate (uso deportivo).",
    description_it:
      "Gli indici si toccano una volta per dare il via a un combattimento (uso sportivo).",
    category_es: "Combatividad",
    category_it: "Combattività",
    image: "assets/pagina16_img10_indici_luno_contro_laltro_1.png",
  },
  {
    id: 47,
    name: "Complicità (indici 2)",
    meaning_es: "Esos dos se entienden",
    meaning_it: "Quei due se la intendono!",
    description_es:
      "Índices se tocan varias veces en señal de complicidad o acuerdo secreto.",
    description_it:
      "Gli indici si toccano ripetutamente a indicare complicità o intesa segreta.",
    category_es: "Complicidad",
    category_it: "Complicità",
    image: "assets/pagina16_img11_indici_luno_contro_laltro_3.png",
  },
  {
    id: 48,
    name: "Colpetti al naso",
    meaning_es: "¡Ojo que es vivo! / Listo",
    meaning_it: "Stai attento! / È furbo!",
    description_es:
      "Índice da golpecitos al costado de la nariz para advertir astucia o posible engaño.",
    description_it:
      "Indice dà colpetti al lato del naso per avvertire furbizia o allerta.",
    category_es: "Astucia / Alerta",
    category_it: "Astuzia / Attenzione",
    image: "assets/pagina16_img12_colpetti_al_naso.png",
  },
  {
    id: 49,
    name: "Palmo battuto sul pugno",
    meaning_es: "¡Toma, trágate esta!",
    meaning_it: "Te' cca, agghiùttiti chista!",
    description_es:
      "Palma golpea un puño con pulgar-índice levantados: gesto de desdén o amenaza.",
    description_it:
      "Il palmo batte su un pugno col pollice-indice alzati: gesto di dispetto o minaccia.",
    category_es: "Despecho",
    category_it: "Dispetto",
    image: "assets/pagina17_img7_palmo_battuto_sul_pugno.png",
  },
  {
    id: 50,
    name: "Tanto tempo fa",
    meaning_es: "Hace mucho tiempo",
    meaning_it: "Tanto tempo fa!",
    description_es:
      "Mano gira y sube lentamente sobre el hombro indicando un pasado lejano.",
    description_it:
      "La mano ruota e sale lentamente sopra la spalla indicando un passato remoto.",
    category_es: "Tiempo pasado",
    category_it: "Deissi temporale",
    image: "assets/pagina17_img8_tanto_tempo_fa.png",
  },
  {
    id: 51,
    name: "Applauso ironico",
    meaning_es: "¡Bravo…! (con burla)",
    meaning_it: "Ma bravo!",
    description_es:
      "Mismas palmadas que el aplauso normal pero con tono de burla o sarcasmo.",
    description_it: "Stesso battimani ma con tono di scherno o ironia.",
    category_es: "Derisión",
    category_it: "Derisione",
    image: "assets/pagina17_img14_applauso_2.png",
  },
  {
    id: 52,
    name: "Sviolinata",
    meaning_es: "Adulación / Hacer la pelota",
    meaning_it: "Sviolinata",
    description_es:
      "Mano pasa como arco sobre el 'violín' del brazo opuesto para indicar halago exagerado.",
    description_it:
      "La mano mima l'archetto che suona sul 'violino' del braccio opposto: adulación esagerata.",
    category_es: "Adulación",
    category_it: "Lusinga",
    image: "assets/pagina17_img9_sviolinata.png",
  },
  {
    id: 53,
    name: "Scuotimento di mano",
    meaning_es: "¿A quién quieres engañar?",
    meaning_it: "Ma di chi vuol beffarsi?",
    description_es:
      "Mano semiabierta gira rápidamente como sacudiéndose algo de encima: expresa incredulidad o burla.",
    description_it:
      "Mano semiaperta ruota velocemente come a scrollarsi qualcosa di dosso: esprime incredulità o scherno.",
    category_es: "Burla",
    category_it: "Scherno",
    image: "assets/pagina17_img10_scuotimento_di_mano.png",
  },
  {
    id: 54,
    name: "Lima, lima",
    meaning_es: "¡Qué vergüenza!",
    meaning_it: "Vergogna!",
    description_es:
      "Índice de una mano 'lima' el dorso del otro índice para reprochar o avergonzar.",
    description_it:
      "L'indice di una mano 'lima' il dorso dell'altro per rimproverare o far vergognare.",
    category_es: "Reproche",
    category_it: "Vergogna",
    image: "assets/pagina17_img11_lima_lima.png",
  },
  {
    id: 55,
    name: "Pacca sulla fronte",
    meaning_es: "¡Cómo pude olvidarlo!",
    meaning_it: "Che stupido sono stato!",
    description_es:
      "Palma golpea la frente en señal de olvido o torpeza propia.",
    description_it:
      "Il palmo batte sulla fronte per indicare dimenticanza o sciocchezza.",
    category_es: "Olvido",
    category_it: "Dimenticanza",
    image: "assets/pagina17_img12_pacca_sulla_fronte.png",
  },
  {
    id: 56,
    name: "Apri colletto",
    meaning_es: "Uf, qué aprieto",
    meaning_it: "Che disagio",
    description_es:
      "Índice separa el cuello de la camisa mientras se alza la barbilla: indica incomodidad o calor social.",
    description_it:
      "Indice allarga il colletto mentre il mento si alza: indica disagio o caldo sociale.",
    category_es: "Incomodidad",
    category_it: "Disagio",
    image: "assets/pagina17_img13_apri_colletto.png",
  },
  {
    id: 57,
    name: "Mani indietro",
    meaning_es: "Yo no tengo nada que ver",
    meaning_it: "Io non c'entro!",
    description_es:
      "Palmas al frente a la altura de hombros retroceden para desvincularse de una culpa.",
    description_it:
      "Palmi avanti all'altezza delle spalle arretrano per svincolarsi da una colpa.",
    category_es: "Excusa / Inocencia",
    category_it: "Discolpa",
    image: "assets/pagina17_img1_mani_indietro.png",
  },
  {
    id: 58,
    name: "Arriccianaso",
    meaning_es: "¡Qué asco!",
    meaning_it: "No, non mi piace!",
    description_es:
      "Nariz se arruga levantando el labio superior para mostrar desagrado.",
    description_it:
      "Il naso si arriccia sollevando il labbro per mostrare disgusto.",
    category_es: "Disgusto",
    category_it: "Disgusto",
    image: "assets/pagina17_img2_arriccianaso.png",
  },
  {
    id: 59,
    name: "Dita in gola",
    meaning_es: "Me da náusea",
    meaning_it: "Che schifo!",
    description_es:
      "Índice y medio se introducen en la boca simulando arcadas: expresa repulsión extrema.",
    description_it:
      "Indice e medio entrano in bocca simulando conati: esprime ripugnanza estrema.",
    category_es: "Disgusto",
    category_it: "Disgusto",
    image: "assets/pagina17_img3_dita_in_gola.png",
  },
  {
    id: 60,
    name: "Denti stretti",
    meaning_es: "¡Puaj!",
    meaning_it: "Che schifo!",
    description_es:
      "Ojos cerrados y dientes apretados comunican desagrado fuerte.",
    description_it: "Occhi chiusi e denti serrati segnalano forte disgusto.",
    category_es: "Disgusto",
    category_it: "Disgusto",
    image: "assets/pagina17_img4_denti_stretti.png",
  },
  {
    id: 61,
    name: "Lavarsene le mani",
    meaning_es: "Me lavo las manos",
    meaning_it: "Me ne lavo le mani",
    description_es:
      "Palmas verticales se frotan para indicar desentendimiento total.",
    description_it:
      "Palmi verticali che si strofinano per indicare totale disimpegno.",
    category_es: "Desentendimiento",
    category_it: "Disimpegno",
    image: "assets/pagina17_img5_lavarsene_le_mani.png",
  },
  {
    id: 62,
    name: "Colpo al mento",
    meaning_es: "No me importa / Me da igual",
    meaning_it: "Non me ne frega niente",
    description_es:
      "Dorso de los dedos roza el mentón hacia afuera mostrando indiferencia o desprecio.",
    description_it:
      "Il dorso delle dita sfiora il mento verso l'esterno per mostrare indifferenza o disprezzo.",
    category_es: "Desinterés",
    category_it: "Disinteresse",
    image: "assets/pagina17_img6_colpo_al_mento_1.png",
  },
  {
    id: 63,
    name: "Palmo battuto sul pugno (gioia maligna)",
    meaning_es: "¡Toma esa!",
    meaning_it: "Te' cca!",
    description_es:
      "Palmada sobre puño cerrado produce un sonido para subrayar satisfacción maliciosa.",
    description_it:
      "Il palmo batte sul pugno chiuso producendo rumore per sottolineare gioia maligna.",
    category_es: "Despecho",
    category_it: "Gioia maligna",
    image: "assets/pagina17_img7_palmo_battuto_sul_pugno.png",
  },
  {
    id: 64,
    name: "Mah!",
    meaning_es: "No sé… / Duda",
    meaning_it: "Mah…",
    description_es:
      "Índice vertical toca labios y nariz, bloqueando la palabra y expresando incertidumbre.",
    description_it:
      "Indice verticale tocca labbra e naso bloccando la parola e mostrando incertezza.",
    category_es: "Duda",
    category_it: "Dubbio",
    image: "assets/pagina18_img8_mah.png",
  },
  {
    id: 65,
    name: "Sbadiglio (educación)",
    meaning_es: "Cúbrete al bostezar",
    meaning_it: "Mettiti la mano davanti!",
    description_es:
      "Mano abierta cubre la boca al bostezar: gesto de buena educación.",
    description_it:
      "Mano aperta copre la bocca durante lo sbadiglio: gesto di buona educazione.",
    category_es: "Etiqueta",
    category_it: "Educazione",
    image: "assets/pagina18_img9_sbadiglio_1.png",
  },
  {
    id: 66,
    name: "Pugno scosso",
    meaning_es: "¡Victoria!",
    meaning_it: "Urrah!",
    description_es:
      "Puño se sacude cerca de la cabeza para celebrar una victoria.",
    description_it:
      "Il pugno si scuote vicino alla testa per esprimere vittoria.",
    category_es: "Éxito",
    category_it: "Esultanza",
    image: "assets/pagina18_img10_pugno_scosso.png",
  },
  {
    id: 67,
    name: "Braccia alzate con indici tesi",
    meaning_es: "¡Ganamos!",
    meaning_it: "Evviva!",
    description_es:
      "Brazos alzados con índices extendidos a modo de señal triunfal.",
    description_it: "Braccia alzate con indici tesi a espressione di trionfo.",
    category_es: "Éxito",
    category_it: "Esultanza",
    image: "assets/pagina18_img11_braccia_alzate_con_indici_tesi.png",
  },
  {
    id: 68,
    name: "La V di Vittoria",
    meaning_es: "Señal de victoria / Paz",
    meaning_it: "Vittoria!",
    description_es:
      "Índice y medio forman una V con palma al frente: símbolo de victoria popularizado por Churchill.",
    description_it:
      "Indice e medio formano una V con palmo in fuori: simbolo di vittoria reso celebre da Churchill.",
    category_es: "Éxito",
    category_it: "Esultanza",
    image: "assets/pagina18_img12_la_v_di_vittoria.png",
  },
  {
    id: 69,
    name: "Mano a borsa (Fame)",
    meaning_es: "Tengo hambre",
    meaning_it: "Ho fame!",
    description_es:
      "Mano con dedos unidos se acerca varias veces a la boca abierta para indicar hambre.",
    description_it:
      "Mano a grappolo si avvicina più volte alla bocca aperta per indicare fame.",
    category_es: "Hambre",
    category_it: "Fame",
    image: "assets/pagina18_img13_mano_a_borsa_8.png",
  },
  {
    id: 70,
    name: "Ho fame",
    meaning_es: "Tengo hambre",
    meaning_it: "Ho fame!",
    description_es:
      "Mano palma abajo golpea rítmicamente el estómago para expresar hambre.",
    description_it:
      "Mano palmo in giù batte ritmicamente sullo stomaco per esprimere fame.",
    category_es: "Hambre",
    category_it: "Fame",
    image: "assets/pagina18_img14_ho_fame.png",
  },
  {
    id: 71,
    name: "Mano a visiera",
    meaning_es: "Molesta la luz",
    meaning_it: "Che fastidio questa luce",
    description_es:
      "Mano horizontal sobre la frente actúa como visera para protegerse del sol o luz intensa.",
    description_it:
      "Mano orizzontale sulla fronte fa da visiera per ripararsi dalla luce intensa.",
    category_es: "Fastidio",
    category_it: "Fastidio",
    image: "assets/pagina18_img1_mano_a_visiera_1.png",
  },
  {
    id: 72,
    name: "Che palle!",
    meaning_es: "¡Qué aburrimiento! / ¡Qué lata!",
    meaning_it: "Che palle!",
    description_es:
      "Manos palma arriba se mueven poco para expresar hastío o pesadez.",
    description_it:
      "Mani palmo in su si muovono poco per esprimere noia o fastidio.",
    category_es: "Fastidio",
    category_it: "Fastidio",
    image: "assets/pagina18_img2_che_palle.png",
  },
  {
    id: 73,
    name: "Indice alzato (parada)",
    meaning_es: "¡Alto! / Pare",
    meaning_it: "Si fermi!",
    description_es:
      "Índice elevado frente al cuerpo indica detenerse, típico para parar autobús.",
    description_it:
      "Indice alzato davanti al corpo per fermare qualcuno o l'autobus.",
    category_es: "Frenar",
    category_it: "Fermata",
    image: "assets/pagina18_img3_indice_alzato.png",
  },
  {
    id: 74,
    name: "Autostop",
    meaning_es: "¿Me lleva?",
    meaning_it: "Mi dà un passaggio?",
    description_es:
      "Pulgar extendido mientras la mano oscila ligeramente hacia la carretera para pedir ride.",
    description_it:
      "Pollice esteso con la mano che oscilla verso la strada per chiedere un passaggio.",
    category_es: "Transporte",
    category_it: "Emblema",
    image: "assets/pagina18_img4_autostop.png",
  },
  {
    id: 75,
    name: "Palmo avanti",
    meaning_es: "¡Detente! / Espera",
    meaning_it: "Stop! / Ferma!",
    description_es:
      "Palma abierta al frente actúa como barrera para detener movimiento o discurso.",
    description_it:
      "Palmo aperto in avanti funge da barriera per fermare movimento o parola.",
    category_es: "Frenar",
    category_it: "Fermata",
    image: "assets/pagina18_img5_palmo_avanti.png",
  },
  {
    id: 76,
    name: "Che culo!",
    meaning_es: "¡Qué suerte! / Menudo trasero",
    meaning_it: "Che culo!",
    description_es:
      "Ambas manos dibujan dos semicírculos insinuando un trasero grande para hablar de suerte o mucho trabajo.",
    description_it:
      "Le due mani disegnano due semicerchi alludendo a un sedere per parlare di fortuna o gran lavoro.",
    category_es: "Suerte / Insulto",
    category_it: "Fortuna / Insulto",
    image: "assets/pagina18_img6_che_culo.png",
  },
  {
    id: 77,
    name: "Dita incrociate",
    meaning_es: "Dedos cruzados / Suerte",
    meaning_it: "Incrocia le dita!",
    description_es:
      "Índice y medio cruzados simbolizan buena suerte o esperanza.",
    description_it:
      "Indice e medio incrociati simboleggiano buona fortuna o speranza.",
    category_es: "Suerte",
    category_it: "Fortuna",
    image: "assets/pagina18_img7_dita_incrociate.png",
  },
  {
    id: 78,
    name: "Sigaretta",
    meaning_es: "¿Tienes un cigarro?",
    meaning_it: "Hai una sigaretta?",
    description_es:
      "Índice y medio se acercan a la boca como sosteniendo un cigarrillo para pedir o indicar fumar.",
    description_it:
      "Indice e medio si avvicinano alla bocca come tenendo una sigaretta per chiedere o indicare il fumo.",
    category_es: "Fumar",
    category_it: "Fumo",
    image: "assets/pagina19_img8_sigaretta.png",
  },
  {
    id: 79,
    name: "Arraffa arraffa",
    meaning_es: "¡Ese es un ladrón!",
    meaning_it: "Quello è un ladro!",
    description_es:
      "Dedos se cierran uno tras otro formando un puño, simulando robar con destreza.",
    description_it:
      "Le dita si chiudono una dopo l'altra a formare un pugno, simulando il furto con destrezza.",
    category_es: "Robo",
    category_it: "Furto",
    image: "assets/pagina19_img9_arraffa_arraffa.png",
  },
  {
    id: 80,
    name: "Bau sette!",
    meaning_es: "¡Buuu! (juego infantil)",
    meaning_it: "Bau sette!",
    description_es:
      "Manos cubren rostro y se apartan de golpe para divertir a un niño.",
    description_it:
      "Le mani coprono il viso e si aprono all'improvviso per divertire un bambino.",
    category_es: "Juego infantil",
    category_it: "Gioco",
    image: "assets/pagina19_img10_bau_sette.png",
  },
  {
    id: 81,
    name: "Chi gioca?",
    meaning_es: "¿Quién juega?",
    meaning_it: "Chi gioca?",
    description_es:
      "Niños ponen su índice bajo la palma del que dirige el juego para elegir al primero.",
    description_it:
      "I bambini pongono l'indice sotto il palmo del proponente per scegliere chi inizia il gioco.",
    category_es: "Juego",
    category_it: "Gioco",
    image: "assets/pagina19_img12_chi_gioca.png",
  },
  {
    id: 82,
    name: "Ti ho preso il naso!",
    meaning_es: "¡Te agarré la nariz!",
    meaning_it: "Ti ho preso il naso!",
    description_es:
      "Se 'agarra' la nariz del niño y el pulgar se muestra entre índice y medio simulando tenerla.",
    description_it:
      "Si 'prende' il naso del bambino e il pollice tra indice e medio lo simula.",
    category_es: "Juego infantil",
    category_it: "Gioco",
    image: "assets/pagina19_img13_ti_ho_preso_il_naso.png",
  },
  {
    id: 83,
    name: "Pistola",
    meaning_es: "¡Bang!",
    meaning_it: "Bang!",
    description_es:
      "Índice y pulgar forman una pistola que 'dispara' con pequeño retroceso.",
    description_it:
      "Indice e pollice formano una pistola che 'spara' con piccolo rinculo.",
    category_es: "Juego / Amenaza",
    category_it: "Gioco / Minaccia",
    image: "assets/pagina19_img14_la_pistola.png",
  },
  {
    id: 84,
    name: "Gomito in fuori",
    meaning_es: "¡Toma esto! (codazo)",
    meaning_it: "Prendi questo!",
    description_es:
      "Puño delante del pecho y codo se impulsa lateralmente para expresar triunfo malicioso.",
    description_it:
      "Pugno davanti al petto e gomito che spinge lateralmente per esprimere gioia maligna.",
    category_es: "Despecho",
    category_it: "Gioia maligna",
    image: "assets/pagina19_img1_gomito_in_fuori.png",
  },
  {
    id: 85,
    name: "Bacio di medio e indice",
    meaning_es: "¡Lo juro!",
    meaning_it: "Lo giuro!",
    description_es:
      "Medio e índice juntos se besan para sellar un juramento solemne.",
    description_it:
      "Medio e indice uniti vengono baciati per suggellare un giuramento.",
    category_es: "Juramento",
    category_it: "Giuramento",
    image: "assets/pagina19_img2_bacio_di_medio_e_indice.png",
  },
  {
    id: 86,
    name: "Mano sul cuore",
    meaning_es: "Palabra de honor",
    meaning_it: "Parola d'onore!",
    description_es:
      "Mano abierta se apoya sobre el corazón como promesa sincera.",
    description_it: "Mano aperta sul cuore per promettere con sincerità.",
    category_es: "Juramento",
    category_it: "Giuramento",
    image: "assets/pagina19_img3_mano_sul_cuore.png",
  },
  {
    id: 87,
    name: "La O 7 (giustizia)",
    meaning_es: "Persona justa",
    meaning_it: "È una persona giusta!",
    description_es:
      "O con pulgar-índice frente al corazón simboliza equilibrio y justicia.",
    description_it:
      "O con pollice-indice davanti al cuore simboleggia equilibrio e giustizia.",
    category_es: "Justicia",
    category_it: "Giustizia",
    image: "assets/pagina19_img4_la_o_7.png",
  },
  {
    id: 88,
    name: "Non lo so (encogerse de hombros)",
    meaning_es: "No lo sé",
    meaning_it: "Non lo so",
    description_es:
      "Hombros se elevan y palmas arriba para mostrar ignorancia o duda.",
    description_it:
      "Spalle si alzano e palmi in su per mostrare ignoranza o dubbio.",
    category_es: "Ignorancia",
    category_it: "Ignoranza",
    image: "assets/pagina19_img5_non_lo_so.png",
  },
  {
    id: 89,
    name: "Io non so niente",
    meaning_es: "Yo no sé nada (omertá)",
    meaning_it: "Io non c'entro / Non so nulla",
    description_es:
      "Palmas al frente y hombros hacia atrás para negar implicación.",
    description_it: "Palmi avanti e spalle indietro per negare coinvolgimento.",
    category_es: "Negación / Omertá",
    category_it: "Omertà",
    image: "assets/pagina19_img6_io_non_so_niente.png",
  },
  {
    id: 90,
    name: "Manette",
    meaning_es: "En prisión / Arrestado",
    meaning_it: "Sono in prigione",
    description_es:
      "Puños cruzados a la altura de muñecas imitan estar esposado.",
    description_it:
      "Pugni incrociati ai polsi imitano le manette dell'arresto.",
    category_es: "Prisión",
    category_it: "Incarcerazione",
    image: "assets/pagina19_img7_manette.png",
  },
  {
    id: 91,
    name: "Sfregolio (orecchio)",
    meaning_es: "No estoy seguro de lo que digo",
    meaning_it: "Non sono sicuro…",
    description_es:
      "Pulgar e índice se frotan contra la oreja para expresar incertidumbre verbal.",
    description_it:
      "Pollice e indice si sfregano contro l'orecchio per esprimere incertezza verbale.",
    category_es: "Incertidumbre",
    category_it: "Incertezza",
    image: "assets/pagina20_img5_sfregolio.png",
  },
  {
    id: 92,
    name: "Sì, ciao, buonasera!",
    meaning_es: "¡Ni te enteras! / Qué va",
    meaning_it: "Non hai capito niente!",
    description_es:
      "Mano semicurva se lanza detrás del hombro para descartar algo como absurdo.",
    description_it:
      "Mano leggermente curva si getta dietro la spalla per scartare qualcosa come assurdo.",
    category_es: "Incomprensión / Desdén",
    category_it: "Incomprensione",
    image: "assets/pagina20_img6_si_ciao_buonasera.png",
  },
  {
    id: 93,
    name: "Non sento!",
    meaning_es: "¡No oigo!",
    meaning_it: "Non sento!",
    description_es:
      "Mano en forma de cuenco se apoya en la oreja para solicitar repetición.",
    description_it: "Mano a conca sull'orecchio per chiedere di ripetere.",
    category_es: "Incomprensión",
    category_it: "Incomprensione",
    image: "assets/pagina20_img7_non_sento.png",
  },
  {
    id: 94,
    name: "Indici l'uno contro l'altro (Inimicizia)",
    meaning_es: "Mala sangre entre ellos",
    meaning_it: "Tra quei due non corre buon sangue",
    description_es: "Índices chocan repetidamente para indicar enemistad.",
    description_it: "Gli indici urtano ripetutamente per indicare inimicizia.",
    category_es: "Enemistad",
    category_it: "Inimicizia",
    image: "assets/pagina20_img8_indici_luno_contro_laltro_2.png",
  },
  {
    id: 95,
    name: "Coscienza a posto",
    meaning_es: "Conciencia tranquila",
    meaning_it: "Ho la coscienza a posto",
    description_es:
      "Palmas arriba suben ligeramente como pesando algo para afirmar inocencia.",
    description_it:
      "Palmi in su salgono leggermente come a pesare per affermare innocenza.",
    category_es: "Inocencia",
    category_it: "Innocenza",
    image: "assets/pagina20_img9_coscienza_a_posto.png",
  },
  {
    id: 96,
    name: "Insisto",
    meaning_es: "¡Insisto!",
    meaning_it: "Insisto!",
    description_es:
      "Índice golpea con fuerza la palma opuesta para reiterar un punto.",
    description_it:
      "Indice picchia con forza sul palmo opposto per ribadire un punto.",
    category_es: "Insistencia",
    category_it: "Insistenza",
    image: "assets/pagina20_img10_insisto.png",
  },
  {
    id: 97,
    name: "Sguardo in alto",
    meaning_es: "Ojos al cielo / No lo aguanto",
    meaning_it: "Non ne posso più",
    description_es:
      "Ojos se elevan rápidamente sin mover la cabeza para mostrar insoportación.",
    description_it:
      "Gli occhi si alzano rapidamente senza muovere la testa per mostrare insofferenza.",
    category_es: "Insoportación",
    category_it: "Insofferenza",
    image: "assets/pagina20_img12_sguardo_in_alto_7.png",
  },
  {
    id: 98,
    name: "Ne ho fin qui",
    meaning_es: "¡Hasta aquí llegué!",
    meaning_it: "Ne ho fin qui!",
    description_es:
      "Mano plana raspa la frente para indicar que se ha colmado la paciencia.",
    description_it:
      "La mano piana raschia la fronte per indicare che la misura è colma.",
    category_es: "Hartazgo",
    category_it: "Insopportazione",
    image: "assets/pagina20_img11_ne_ho_fin_qui.png",
  },
  {
    id: 99,
    name: "Le fiche / Figa",
    meaning_es: "Insulto sexual (figa)",
    meaning_it: "Le fiche",
    description_es:
      "Pulgar entre índice y medio en puño cerrado: insulto o gesto obsceno de protección según contexto.",
    description_it:
      "Pollice fra indice e medio nel pugno: insulto osceno o gesto apotropaico secondo il contesto.",
    category_es: "Insulto / Sconjuro",
    category_it: "Insulto / Scongiuro",
    image: "assets/pagina20_img13_le_fiche.png",
  },
  {
    id: 100,
    name: "La O 3 (orifizio)",
    meaning_es: "Insulto (orificio)",
    meaning_it: "Gesto osceno O 3",
    description_es:
      "O con pulgar-índice a la altura del cuello se mueve lateralmente para insinuar homosexualidad de forma peyorativa.",
    description_it:
      "O con pollice-indice all'altezza del collo si muove per insultare in modo omofobo.",
    category_es: "Insulto",
    category_it: "Insulto",
    image: "assets/pagina20_img1_la_o_3.png",
  },
  {
    id: 101,
    name: "La O in movimento",
    meaning_es: "Insulto (masturbación)",
    meaning_it: "Gesto osceno O in movimento",
    description_es:
      "La misma O sube y baja frente al pecho para insinuar masturbación y desprecio.",
    description_it:
      "La stessa O sale e scende davanti al petto per alludere alla masturbazione e disprezzo.",
    category_es: "Insulto",
    category_it: "Insulto",
    image: "assets/pagina20_img2_la_o_in_movimento.png",
  },
  {
    id: 102,
    name: "Cornuto!",
    meaning_es: "¡Cornudo!",
    meaning_it: "Cornuto!",
    description_es:
      "Índice y meñique extendidos en cuernos acusan infidelidad conyugal.",
    description_it:
      "Indice e mignolo tesi a corna accusano infedeltà coniugale.",
    category_es: "Insulto grave",
    category_it: "Grave insulto",
    image: "assets/pagina20_img3_cornuto.png",
  },
  {
    id: 103,
    name: "Gesto dell'ombrello",
    meaning_es: "¡Que te den! / Hacer un corte de mangas",
    meaning_it: "Gesto dell'ombrello",
    description_es:
      "Palma golpea el interior del codo del otro brazo extendido formando un gesto de desprecio muy fuerte.",
    description_it:
      "Il palmo colpisce l'interno del gomito dell'altro braccio teso: gesto di disprezzo fortissimo.",
    category_es: "Insulto grave",
    category_it: "Grave insulto",
    image: "assets/pagina20_img4_gesto_dell_ombrello.png",
  },
];

/* ---------- Renderizado Wiki ---------- */
const listContainer = document.getElementById("gestureList");
const searchInput = document.getElementById("search");

function renderList(filter = "") {
  listContainer.innerHTML = "";
  gestures
    .filter((g) => g.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((g) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${g.name}</h3>
        <div class="card-details">
          <img src="${g.image}" alt="${g.name}" onerror="this.style.display='none'" />
          <div class="info-grid">
            <div>
              <p><strong>Significado (ES):</strong> ${g.meaning_es}</p>
              <p><strong>Categoría (ES):</strong> ${g.category_es}</p>
              <p><strong>Descripción (ES):</strong> ${g.description_es}</p>
            </div>
            <div>
              <p><strong>Significato (IT):</strong> ${g.meaning_it}</p>
              <p><strong>Categoria (IT):</strong> ${g.category_it}</p>
              <p><strong>Descrizione (IT):</strong> ${g.description_it}</p>
            </div>
          </div>
        </div>`;
      listContainer.appendChild(card);
    });
}

searchInput.addEventListener("input", (e) => {
  renderList(e.target.value);
});

// Render inicial
renderList();

// --- Sección de Juego tipo test ---
const quizSection = document.getElementById("quizSection");
const quizContainer = document.getElementById("quizContainer");
const wikiSection = document.getElementById("wikiSection");
const wikiBtn = document.getElementById("wikiBtn");
const quizBtn = document.getElementById("quizBtn");

// Navegación entre secciones
wikiBtn.addEventListener("click", () => {
  wikiBtn.classList.add("active");
  quizBtn.classList.remove("active");
  wikiSection.style.display = "block";
  quizSection.style.display = "none";
});
quizBtn.addEventListener("click", () => {
  quizBtn.classList.add("active");
  wikiBtn.classList.remove("active");
  wikiSection.style.display = "none";
  quizSection.style.display = "block";
  startQuiz();
});

// --- Lógica del juego tipo test ---
let quizState = {
  current: 0,
  questions: [],
  answered: false,
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateQuizQuestions(n = 10) {
  // Pregunta: ¿Cuál es el siguiente gesto? (dada una imagen)
  const questions = [];
  const used = new Set();
  const total = Math.min(n, gestures.length);
  while (questions.length < total) {
    const idx = Math.floor(Math.random() * gestures.length);
    if (used.has(idx)) continue;
    used.add(idx);
    const correct = gestures[idx];
    // Opciones: 1 correcta + 3 aleatorias
    let options = [correct];
    while (options.length < 4) {
      const oidx = Math.floor(Math.random() * gestures.length);
      if (oidx !== idx && !options.includes(gestures[oidx])) {
        options.push(gestures[oidx]);
      }
    }
    options = shuffle(options);
    questions.push({
      image: correct.image,
      correct,
      options,
    });
  }
  return questions;
}

function startQuiz() {
  quizState.questions = generateQuizQuestions(10);
  quizState.current = 0;
  quizState.answered = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizState.questions[quizState.current];
  if (!q) {
    quizContainer.innerHTML = `<h2>¡Juego terminado!</h2><button class="quiz-next-btn" onclick="startQuiz()">Jugar de nuevo</button>`;
    return;
  }
  quizState.answered = false;
  quizContainer.innerHTML = `
    <h2>¿Cuál es el siguiente gesto?</h2>
    <img src="${
      q.image
    }" class="quiz-image" alt="Gesto" onerror="this.style.display='none'" />
    <div class="quiz-options">
      ${q.options
        .map(
          (opt, i) =>
            `<button class="quiz-option" data-idx="${i}"><b>${String.fromCharCode(
              65 + i
            )}.</b> ${opt.name}</button>`
        )
        .join("")}
    </div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <div class="quiz-details" id="quizDetails" style="display:none"></div>
  `;
  document.querySelectorAll(".quiz-option").forEach((btn, i) => {
    btn.addEventListener("click", () => handleQuizAnswer(i));
  });
}

function handleQuizAnswer(selectedIdx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.current];
  const correctIdx = q.options.findIndex((o) => o === q.correct);
  document.querySelectorAll(".quiz-option").forEach((btn, i) => {
    btn.classList.remove("selected");
    if (i === correctIdx) btn.classList.add("correct");
    if (i === selectedIdx && i !== correctIdx) btn.classList.add("incorrect");
    if (i === selectedIdx) btn.classList.add("selected");
    btn.disabled = true;
  });
  const feedback =
    selectedIdx === correctIdx
      ? "✅ ¡Correcto!"
      : `❌ Incorrecto. Era <b>${q.correct.name}</b>`;
  document.getElementById("quizFeedback").innerHTML = feedback;
  // Mostrar detalles del gesto correcto
  document.getElementById("quizDetails").style.display = "block";
  document.getElementById("quizDetails").innerHTML = `
    <strong>Significado (ES):</strong> ${q.correct.meaning_es}<br>
    <strong>Categoría (ES):</strong> ${q.correct.category_es}<br>
    <strong>Descripción (ES):</strong> ${q.correct.description_es}<br>
    <hr>
    <strong>Significato (IT):</strong> ${q.correct.meaning_it}<br>
    <strong>Categoria (IT):</strong> ${q.correct.category_it}<br>
    <strong>Descrizione (IT):</strong> ${q.correct.description_it}
  `;
  // Botón siguiente
  const nextBtn = document.createElement("button");
  nextBtn.className = "quiz-next-btn";
  nextBtn.textContent =
    quizState.current < quizState.questions.length - 1
      ? "Siguiente"
      : "Terminar";
  nextBtn.onclick = () => {
    quizState.current++;
    renderQuizQuestion();
  };
  quizContainer.appendChild(nextBtn);
}

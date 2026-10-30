export default {
  id: 'safe-overtaking',
  category: 'adelantar',
  order: 1,
  minutes: 8,
  diagram: 'overtaking',
  related: ['blind-spots', 'road-markings', 'following-distance', 'watch-for-motorcycles'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Informe sobre la situación mundial de la seguridad vial 2023',
      labelEn: 'World Health Organization (WHO), Global status report on road safety 2023' },
    { label: 'Organización Mundial de la Salud (OMS), Manual de gestión de la velocidad, 2.ª ed., 2023',
      labelEn: 'World Health Organization (WHO), Speed management manual, 2nd ed., 2023' }
  ],
  es: {
    slug: 'rebasar-con-seguridad',
    title: 'Rebasar con seguridad',
    dek: 'Rebasar es una de las maniobras más peligrosas en una carretera de dos carriles. Aprende cuándo no hacerlo, cómo hacerlo bien y qué hacer cuando te rebasan a ti.',
    objectives: [
      'Reconocer los lugares y situaciones donde nunca se debe rebasar.',
      'Saber los pasos de un rebase seguro, de principio a fin.',
      'Aplicar la regla “si dudas, no rebases”.',
      'Saber cómo comportarte cuando otro vehículo te rebasa.'
    ],
    sections: [
      {
        heading: 'Por qué rebasar es tan arriesgado',
        paragraphs: [
          'Para rebasar en una carretera de un carril por sentido tienes que pasarte al carril contrario, el mismo por donde vienen otros vehículos de frente. Durante esos segundos, tú y el que viene en sentido contrario se acercan a la suma de sus dos velocidades. Si algo sale mal, el choque es de frente, que es de los más graves que existen.',
          'El problema es que casi siempre calculamos mal. Es difícil juzgar a qué velocidad viene un carro de frente, y rebasar un camión, un bus o un pick-up cargado toma mucho más tiempo y espacio de lo que parece. Por eso la decisión de rebasar tiene que tomarse con calma, con buena visibilidad y con margen de sobra.'
        ]
      },
      {
        heading: 'Dónde y cuándo no rebasar',
        paragraphs: [
          'Las líneas y señales de la carretera existen para indicarte dónde no es seguro rebasar. Obedécelas siempre. Pero aunque una línea esté borrada o no haya señal, hay lugares donde la recomendación de los expertos en seguridad vial es clara: no rebases.'
        ],
        list: [
          '<strong>En curvas:</strong> no puedes ver lo que viene detrás de la curva.',
          '<strong>Cerca de la cima de una cuesta:</strong> un carro o una moto puede aparecer de golpe del otro lado.',
          '<strong>En intersecciones, cruces y entradas a negocios o casas:</strong> alguien puede estar girando o saliendo.',
          '<strong>Cerca de pasos peatonales, escuelas o paradas de bus:</strong> un peatón puede cruzar delante del vehículo que rebasas sin que tú lo veas.',
          '<strong>Donde hay línea central continua o señal de “No rebasar”.</strong>',
          '<strong>Con poca visibilidad:</strong> lluvia fuerte, neblina, de noche sin ver claramente el tramo, o con sol de frente.',
          '<strong>Detrás de un vehículo que ya está rebasando:</strong> no te pegues a su maniobra; espera a que termine y evalúa de nuevo.',
          '<strong>Varios vehículos a la vez:</strong> rebasar una fila completa te deja mucho tiempo en el carril contrario y sin lugar seguro para regresar.'
        ]
      },
      {
        heading: 'Los pasos de un rebase seguro',
        paragraphs: [
          'Si el tramo es recto, la línea lo permite y ves la carretera despejada a buena distancia, sigue estos pasos sin saltarte ninguno:'
        ],
        list: [
          '<strong>Mantén distancia</strong> detrás del vehículo que vas a rebasar. Pegarte a él te quita visibilidad hacia adelante.',
          '<strong>Revisa espejos y punto ciego.</strong> Asegúrate de que nadie, sobre todo una moto, te está rebasando a ti.',
          '<strong>Pon la direccional</strong> con tiempo para avisar lo que vas a hacer.',
          '<strong>Confirma que hay suficiente carretera libre</strong> para pasar y regresar sin obligar a nadie a frenar.',
          '<strong>Comprométete con decisión:</strong> una vez que empiezas, hazlo de forma fluida, sin quedarte a la par del otro vehículo.',
          '<strong>Regresa a tu carril con espacio:</strong> cuando veas el vehículo rebasado completo en tu espejo retrovisor, pon la direccional y vuelve a tu carril sin cerrarle el paso.'
        ]
      },
      {
        heading: 'Si dudas, no rebases',
        paragraphs: [
          'Esta es la regla más importante de toda la lección. Si tienes que pensarlo demasiado, si no estás seguro de la distancia del carro que viene o si no ves bien el final del tramo, la respuesta es no. Quedarte detrás de un camión lento un par de minutos más te cuesta casi nada. Un rebase mal calculado puede costar vidas.',
          'Si ya empezaste a rebasar y te das cuenta de que no alcanzas, lo más seguro suele ser abortar: suelta el acelerador, frena con control y vuelve detrás del vehículo. No aceleres a ciegas esperando que el otro se haga a un lado.'
        ]
      },
      {
        heading: 'Cuando te rebasan, y las motos entre el tráfico',
        paragraphs: [
          'Cuando alguien te rebasa, ayúdale a terminar rápido: mantente a tu derecha, conserva tu velocidad o baja un poco, y nunca aceleres para no dejarte pasar. Acelerar convierte un rebase arriesgado en uno mortal, para el otro y también para los que vienen de frente.',
          'Las motos rebasan a menudo entre filas de carros o por la orilla. Si vas en moto, recuerda que los conductores muchas veces no te ven y que una puerta, un carro que gira o un peatón que cruza entre los vehículos pueden aparecer sin aviso. Si rebasas una fila, hazlo despacio, con espacio y nunca cerca de intersecciones. Si vas en carro, revisa tus espejos antes de moverte dentro de tu carril o de girar, porque puede venir una moto.'
        ]
      }
    ],
    example: {
      title: 'Imagina: detrás de un camión de agua',
      body: [
        'Imagina que vas en carro por la carretera principal detrás de un camión de agua que sube despacio una cuesta. Llevas varios minutos así y ya te estás impacientando. La línea central es continua y no ves qué hay después de la cima.',
        'Lo seguro es esperar. Mantienes distancia para ver mejor, y cuando la carretera se vuelve recta, la línea pasa a ser discontinua y ves que no viene nadie a buena distancia, revisas el espejo, pones la direccional y rebasas con decisión. Regresas a tu carril cuando ves el camión completo en el retrovisor. Perdiste un par de minutos; no arriesgaste nada.'
      ]
    },
    mistakes: [
      'Rebasar en curva o cerca de una cima, porque no puedes ver lo que viene de frente.',
      'Pegarse al vehículo de adelante antes de rebasar, porque te quita visibilidad y espacio para acelerar.',
      'Seguir a otro que va rebasando, porque cuando él regresa a su carril tú quedas expuesto de frente.',
      'Regresar al carril demasiado pronto, porque le cierras el paso al vehículo que acabas de rebasar.',
      'Acelerar cuando alguien te rebasa, porque lo dejas atrapado en el carril contrario.',
      'Rebasar una fila completa de vehículos, porque pasas demasiado tiempo en el carril contrario sin dónde regresar.'
    ],
    checklist: [
      'Respeta siempre la línea continua y las señales de no rebasar.',
      'Nunca rebases en curvas, cimas, cruces ni cerca de pasos peatonales.',
      'Revisa espejos y punto ciego antes de salir.',
      'Pon la direccional al salir y al regresar.',
      'Rebasa con decisión y regresa con espacio.',
      'Si dudas, no rebases.',
      'Cuando te rebasen, mantente a la derecha y no aceleres.'
    ],
    notes: [
      { kind: 'expert', text: 'Las autoridades de seguridad vial señalan que los choques de frente están entre los más graves, porque las velocidades de los dos vehículos se suman. Reducir los rebases en lugares sin visibilidad es una de las formas más directas de prevenirlos.' },
      { kind: 'practical', text: 'Las líneas de la carretera pueden estar borradas en algunos tramos. Que no veas una línea continua no significa que sea seguro rebasar: decide por lo que ves de la carretera, no solo por la pintura.' }
    ],
    check: [
      {
        q: 'Vas detrás de un bus en una curva y el bus va lento. ¿Qué haces?',
        options: [
          'Rebasas rápido antes de que venga alguien.',
          'Esperas detrás, con distancia, hasta tener un tramo recto con buena visibilidad.',
          'Te pegas al bus para rebasar apenas termine la curva.'
        ],
        answer: 1,
        explain: 'En una curva no puedes ver lo que viene de frente. Esperar con distancia te da visibilidad y te deja listo para rebasar con seguridad más adelante.'
      },
      {
        q: 'Otro carro te está rebasando. ¿Qué es lo correcto?',
        options: [
          'Mantenerte a tu derecha y no acelerar.',
          'Acelerar para que no te gane.',
          'Moverte hacia el centro para que pase más rápido.'
        ],
        answer: 0,
        explain: 'Mantener tu velocidad o bajarla un poco y quedarte a la derecha le permite terminar rápido. Acelerar lo deja atrapado en el carril contrario.'
      },
      {
        q: 'Empezaste a rebasar y ves que el carro que viene de frente está más cerca de lo que pensabas. ¿Qué suele ser lo más seguro?',
        options: [
          'Acelerar al máximo y esperar que el otro se aparte.',
          'Tocar el pito para que el vehículo rebasado frene.',
          'Abortar: soltar el acelerador, frenar con control y volver detrás del vehículo.'
        ],
        answer: 2,
        explain: 'Si no alcanzas, lo más seguro suele ser abortar y regresar detrás. Acelerar a ciegas depende de que los demás reaccionen por ti.'
      }
    ],
    diagramCaption: 'Un rebase seguro: distancia previa, revisión de espejos, carretera libre a la vista y regreso al carril con espacio.'
  },
  en: {
    slug: 'safe-overtaking',
    title: 'Safe overtaking',
    dek: 'Overtaking is one of the most dangerous manoeuvres on a two-lane road. Learn when not to do it, how to do it properly, and what to do when someone is overtaking you.',
    objectives: [
      'Recognise the places and situations where you should never overtake.',
      'Know the steps of a safe overtake, from start to finish.',
      'Apply the rule “if in doubt, don’t”.',
      'Know how to behave when another vehicle is overtaking you.'
    ],
    sections: [
      {
        heading: 'Why overtaking is so risky',
        paragraphs: [
          'To overtake on a road with one lane in each direction, you have to move into the opposite lane, the same lane oncoming vehicles are using. For those few seconds, you and anyone coming towards you are closing at the combined speed of both vehicles. If it goes wrong, the result is a head-on collision, one of the most serious kinds of crash there is.',
          'The problem is that we almost always misjudge it. It is hard to tell how fast an oncoming car is travelling, and passing a truck, a bus or a loaded pick-up takes far more time and road than it seems. That is why the decision to overtake must be made calmly, with good visibility and plenty of margin.'
        ]
      },
      {
        heading: 'Where and when not to overtake',
        paragraphs: [
          'Road markings and signs are there to show you where overtaking is not safe. Always obey them. But even where a line has faded or there is no sign, road-safety experts are clear that there are places where you should not overtake.'
        ],
        list: [
          '<strong>On bends:</strong> you cannot see what is coming round the corner.',
          '<strong>Near the crest of a hill:</strong> a car or motorcycle can appear suddenly from the other side.',
          '<strong>At junctions, crossroads and entrances to businesses or homes:</strong> someone may be turning or pulling out.',
          '<strong>Near crossings, schools or bus stops:</strong> a pedestrian may step out in front of the vehicle you are passing, where you cannot see them.',
          '<strong>Where there is a solid centre line or a “No overtaking” sign.</strong>',
          '<strong>When visibility is poor:</strong> heavy rain, fog, at night without a clear view of the road, or with the sun in your eyes.',
          '<strong>Behind a vehicle that is already overtaking:</strong> do not follow its manoeuvre; wait until it has finished and assess again.',
          '<strong>Several vehicles at once:</strong> passing a whole line keeps you in the opposite lane for a long time with no safe gap to return to.'
        ]
      },
      {
        heading: 'The steps of a safe overtake',
        paragraphs: [
          'If the road is straight, the markings allow it and you can see the road clear well ahead, follow these steps without skipping any:'
        ],
        list: [
          '<strong>Keep your distance</strong> behind the vehicle you plan to pass. Sitting close behind it blocks your view ahead.',
          '<strong>Check your mirrors and blind spot.</strong> Make sure nobody, especially a motorcycle, is already overtaking you.',
          '<strong>Signal</strong> early so others know what you are about to do.',
          '<strong>Confirm there is enough clear road</strong> to pass and return without forcing anyone to brake.',
          '<strong>Commit decisively:</strong> once you start, move through smoothly, without sitting alongside the other vehicle.',
          '<strong>Return with space:</strong> when you can see the whole of the vehicle you passed in your rear-view mirror, signal and move back without cutting in.'
        ]
      },
      {
        heading: 'If in doubt, don’t',
        paragraphs: [
          'This is the most important rule in the whole lesson. If you have to think about it too long, if you are not sure how far away the oncoming car is, or if you cannot clearly see the end of the stretch, the answer is no. Staying behind a slow truck for a couple more minutes costs you almost nothing. A misjudged overtake can cost lives.',
          'If you have started to overtake and realise you will not make it, the safest option is usually to abort: ease off the accelerator, brake under control and drop back behind the vehicle. Do not accelerate blindly and hope the other driver will get out of the way.'
        ]
      },
      {
        heading: 'Being overtaken, and motorcycles in traffic',
        paragraphs: [
          'When someone overtakes you, help them finish quickly: keep to your right, hold your speed or ease off slightly, and never speed up to stop them getting past. Speeding up turns a risky overtake into a deadly one, for that driver and for anyone coming the other way.',
          'Motorcycles often pass between lines of cars or along the edge of the road. If you ride, remember that drivers often do not see you, and that a door, a turning car or a pedestrian crossing between vehicles can appear without warning. If you pass a line of traffic, do it slowly, with space, and never near junctions. If you drive, check your mirrors before you move within your lane or turn, because a motorcycle may be coming through.'
        ]
      }
    ],
    example: {
      title: 'Picture this: behind a water truck',
      body: [
        'Picture yourself driving along the main road behind a water truck crawling up a hill. You have been stuck there for several minutes and you are getting impatient. The centre line is solid and you cannot see what is over the crest.',
        'The safe choice is to wait. You keep your distance so you can see better, and when the road straightens, the line becomes broken and you can see nothing coming for a good distance, you check your mirror, signal and pass decisively. You move back when you can see the whole truck in your rear-view mirror. You lost a couple of minutes; you risked nothing.'
      ]
    },
    mistakes: [
      'Overtaking on a bend or near a crest, because you cannot see what is coming towards you.',
      'Sitting close behind the vehicle before overtaking, because it cuts your view and your room to accelerate.',
      'Following another vehicle that is overtaking, because when it pulls back in you are left facing oncoming traffic.',
      'Pulling back in too early, because you cut across the vehicle you have just passed.',
      'Speeding up when someone is overtaking you, because it traps them in the opposite lane.',
      'Passing a whole line of vehicles, because you spend too long in the opposite lane with nowhere to return to.'
    ],
    checklist: [
      'Always respect solid lines and no-overtaking signs.',
      'Never overtake on bends, crests, at junctions or near crossings.',
      'Check mirrors and blind spot before pulling out.',
      'Signal when pulling out and when moving back.',
      'Overtake decisively and return with space.',
      'If in doubt, don’t.',
      'When being overtaken, keep right and do not speed up.'
    ],
    notes: [
      { kind: 'expert', text: 'Road-safety authorities point out that head-on crashes are among the most severe, because the speeds of both vehicles combine. Cutting out overtaking where visibility is limited is one of the most direct ways to prevent them.' },
      { kind: 'practical', text: 'Road markings may have worn away on some stretches. Not seeing a solid line does not mean it is safe to overtake: decide by what you can see of the road, not just by the paint.' }
    ],
    check: [
      {
        q: 'You are behind a slow bus on a bend. What do you do?',
        options: [
          'Overtake quickly before anyone comes.',
          'Wait behind, at a distance, until you have a straight stretch with good visibility.',
          'Close up on the bus so you can overtake as soon as the bend ends.'
        ],
        answer: 1,
        explain: 'On a bend you cannot see what is coming. Waiting at a distance gives you a view ahead and leaves you ready to overtake safely later.'
      },
      {
        q: 'Another car is overtaking you. What is the right response?',
        options: [
          'Keep to your right and do not speed up.',
          'Speed up so it cannot get past.',
          'Move towards the centre so it passes faster.'
        ],
        answer: 0,
        explain: 'Holding your speed or easing off slightly and keeping right lets them finish quickly. Speeding up traps them in the opposite lane.'
      },
      {
        q: 'You have started to overtake and the oncoming car is closer than you thought. What is usually the safest option?',
        options: [
          'Accelerate hard and hope the other driver moves aside.',
          'Sound your horn so the vehicle you are passing brakes.',
          'Abort: ease off, brake under control and drop back behind the vehicle.'
        ],
        answer: 2,
        explain: 'If you will not make it, the safest option is usually to abort and drop back. Accelerating blindly relies on others reacting for you.'
      }
    ],
    diagramCaption: 'A safe overtake: distance beforehand, mirror check, clear road ahead and returning to the lane with space.'
  }
};

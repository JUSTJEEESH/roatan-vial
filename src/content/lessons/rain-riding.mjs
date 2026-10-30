export default {
  id: 'rain-riding',
  category: 'defensivo',
  order: 5,
  minutes: 7,
  diagram: 'stopping-distance',
  related: ['stopping-distance', 'following-distance', 'moto-braking', 'night-visibility'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Speed management: a road safety manual for decision-makers and practitioners (en inglés), 2.ª ed., 2023',
      labelEn: 'World Health Organization (WHO), Speed management: a road safety manual for decision-makers and practitioners, 2nd ed., 2023' }
  ],
  es: {
    slug: 'manejar-bajo-la-lluvia',
    title: 'Manejar bajo la lluvia',
    dek: 'En la isla, un aguacero puede llegar en minutos y cambiar la calle por completo. Con lluvia hay menos agarre, menos visibilidad y más sorpresas escondidas bajo el agua.',
    objectives: [
      'Entender por qué los primeros minutos de lluvia son especialmente resbalosos.',
      'Reconocer las superficies que pierden más agarre cuando están mojadas.',
      'Saber ajustar velocidad, distancia y maniobras para frenar a tiempo en mojado.',
      'Saber cuándo parar y esperar, y por qué nunca se cruza agua en movimiento.'
    ],
    sections: [
      {
        heading: 'Los primeros minutos son los peores',
        paragraphs: [
          'Con el tráfico de todos los días, en el pavimento se acumula una capa fina de aceite, combustible, polvo y hule de las llantas. Cuando empieza a llover después de días secos, el agua levanta esa mezcla y la deja flotando sobre la superficie. Por eso la calle suele estar más resbalosa al inicio del aguacero que después de un rato de lluvia fuerte, cuando el agua ya ha lavado parte de esa capa.',
          'Si te agarra la lluvia, los primeros minutos son el momento de ir con más cuidado: baja la velocidad, aumenta la distancia y evita frenar o girar con fuerza.'
        ]
      },
      {
        heading: 'Dónde se pierde más agarre',
        paragraphs: [
          'No toda la calle mojada se comporta igual. Algunas superficies se vuelven mucho más lisas que el asfalto mojado, y en moto son las más traicioneras porque una sola llanta que se desliza puede tumbarte.'
        ],
        list: [
          'Líneas y flechas pintadas, y pasos de cebra.',
          'Tapas de alcantarilla, rejillas, planchas metálicas y puentes con piso de metal.',
          'Hojas, lodo, arena y grava que la lluvia arrastra a la calle, sobre todo en bajadas y curvas.',
          'Manchas de aceite o diésel, frecuentes en paradas de bus, gasolineras y cruces.',
          'Concreto muy liso o pulido por el uso.'
        ]
      },
      {
        heading: 'Más distancia para detenerte',
        paragraphs: [
          'En pavimento mojado, las llantas tienen menos agarre y necesitas más distancia para detenerte desde la misma velocidad. Tu tiempo de reacción no mejora con la lluvia; al contrario, con menos visibilidad puedes tardar más en notar el peligro. Por eso la respuesta es la misma siempre: menos velocidad y más espacio delante.',
          'Como guía práctica, si en seco dejas al menos tres segundos con el vehículo de adelante, con lluvia deja bastante más. Y maneja con suavidad: acelera, frena y gira de forma progresiva. En moto, usa los dos frenos con suavidad y frena con la moto derecha, antes de la curva y no dentro de ella. Los movimientos bruscos son los que hacen que una llanta pierda el agarre.',
          'Si el agua se acumula en la calle, el carro puede llegar a “flotar” sobre ella y la dirección se siente ligera. Si te pasa, no frenes de golpe ni gires el timón: suelta el acelerador poco a poco y deja que las llantas recuperen contacto.'
        ]
      },
      {
        heading: 'Ver y ser visto en la lluvia',
        paragraphs: [
          'La lluvia reduce lo que ves y lo que los demás ven de ti. Enciende las luces aunque sea de día, para que otros te distingan entre el agua y la neblina. En moto, un visor limpio y en buen estado es indispensable; si se empaña, abre un poco el visor a baja velocidad o detente a limpiarlo. En carro, revisa que las plumillas limpien bien y usa el desempañador.',
          'Recuerda que los demás también ven menos. Un peatón con sombrilla o con la cabeza agachada puede cruzar sin verte. Un carro con los vidrios empañados quizá no note tu moto en el espejo.'
        ]
      },
      {
        heading: 'Charcos, inundaciones y cuándo parar',
        paragraphs: [
          'Un charco puede esconder un bache profundo, una alcantarilla sin tapa o piedras sueltas. Si puedes evitarlo con seguridad, evítalo; si no, pásalo despacio, en línea recta y sin frenar dentro del agua. Al pasar cerca de peatones, baja la velocidad para no mojarlos ni sorprenderlos.',
          'Nunca intentes cruzar agua que corre por la calle, una quebrada crecida o un vado inundado. No puedes saber qué tan profunda es ni si el pavimento sigue ahí debajo, y el agua en movimiento puede arrastrar una moto, un carro o a una persona con mucha más fuerza de lo que parece. Espera a que baje o busca otra ruta.',
          'Si la lluvia es tan fuerte que no ves bien o el agua cubre la calle, lo más seguro es parar. Busca un lugar fuera de la vía, como un estacionamiento, una gasolinera o una entrada amplia, y espera ahí. No te detengas debajo de un puente sobre la calle, en una curva ni en la orilla sin espacio, donde otros no te verán a tiempo.'
        ]
      }
    ],
    example: {
      title: 'El aguacero de la tarde',
      body: [
        'Imagina a un muchacho que va en moto por la carretera principal a media tarde, después de una semana sin llover. Empiezan a caer las primeras gotas y él sigue a la misma velocidad, pensando que todavía no está mojado.',
        'Al llegar a una parada de bus frena con fuerza para no golpear al carro de adelante. Justo ahí, donde se acumula aceite, la llanta delantera se desliza sobre la línea pintada. Más adelante, la calle baja hacia una quebrada que ya corre por encima del vado.',
        'La forma segura es otra: al sentir las primeras gotas baja la velocidad, deja más espacio y frena de forma progresiva, antes de las rayas pintadas. Al ver el agua corriendo sobre el vado, se detiene en un lugar seguro fuera de la calle y espera a que baje. Llega un poco más tarde, pero llega.'
      ]
    },
    mistakes: [
      'Pensar que la calle está más segura al inicio de la lluvia: los primeros minutos suelen ser los más resbalosos.',
      'Frenar fuerte sobre líneas pintadas o tapas metálicas: son de las superficies con menos agarre en mojado.',
      'Mantener la misma distancia que en seco: en mojado necesitas más espacio para detenerte.',
      'Manejar con el visor empañado o sin luces: reduces lo que ves y lo que los demás ven de ti.',
      'Meterse a un charco grande sin saber qué hay debajo: puede esconder un bache o una alcantarilla abierta.',
      'Intentar cruzar agua en movimiento: no se sabe su profundidad y puede arrastrar el vehículo.'
    ],
    checklist: [
      'Con las primeras gotas, baja la velocidad.',
      'Deja mucho más espacio que en seco con el vehículo de adelante.',
      'Acelera, frena y gira con suavidad.',
      'Evita frenar sobre pintura, metal, hojas o manchas de aceite.',
      'Luces encendidas y visor o parabrisas limpio.',
      'Rodea los charcos cuando puedas hacerlo con seguridad.',
      'Nunca cruces agua que corre.',
      'Si no ves bien, para en un lugar seguro fuera de la vía y espera.'
    ],
    notes: [
      { kind: 'expert', text: 'La OMS recomienda adaptar la velocidad a las condiciones de la vía y del clima: una velocidad que es razonable en seco puede ser demasiado alta con lluvia.' },
      { kind: 'practical', text: 'Si sabes que va a llover, sal un poco antes o espera a que pase el aguacero. Llegar más tarde es mejor que manejar con prisa en una calle mojada.' },
      { kind: 'law', fact: 'hn-911', text: 'Si ves a alguien atrapado por el agua o un vehículo arrastrado, llama al 911, el número nacional de emergencias en Honduras, en lugar de entrar al agua.' }
    ],
    check: [
      {
        q: 'Empieza a llover después de varios días secos. ¿Cuándo está más resbalosa la calle?',
        options: [
          'Durante los primeros minutos de lluvia.',
          'Solo cuando ya hay charcos grandes.',
          'Cuando la lluvia ya ha durado varias horas.'
        ],
        answer: 0,
        explain: 'Al empezar a llover, el agua levanta la capa de aceite, polvo y residuos acumulada en el pavimento, y la superficie queda muy resbalosa.'
      },
      {
        q: 'Ves que el agua corre por encima de un vado. ¿Qué haces?',
        options: [
          'Pasar rápido para no quedarte atascado.',
          'Pasar despacio pegado a la orilla.',
          'Detenerte en un lugar seguro y esperar a que baje o buscar otra ruta.'
        ],
        answer: 2,
        explain: 'No puedes saber la profundidad ni si el pavimento sigue ahí, y el agua en movimiento puede arrastrar un vehículo. Nunca se cruza.'
      },
      {
        q: '¿Qué ajuste es el más importante al manejar con lluvia?',
        options: [
          'Usar solo el freno trasero.',
          'Menos velocidad, más distancia y movimientos suaves.',
          'Pegarse al vehículo de adelante para seguir sus huellas.'
        ],
        answer: 1,
        explain: 'En mojado necesitas más distancia para detenerte, y los movimientos bruscos son los que hacen perder el agarre.'
      }
    ],
    diagramCaption: 'Las distancias del diagrama corresponden a asfalto seco. En pavimento mojado, la distancia de frenado es mayor, así que con lluvia necesitas menos velocidad y más espacio.'
  },
  en: {
    slug: 'riding-in-the-rain',
    title: 'Riding and driving in the rain',
    dek: 'On the island, a downpour can arrive in minutes and change the road completely. Rain means less grip, less visibility and more surprises hidden under the water.',
    objectives: [
      'Understand why the first minutes of rain are especially slippery.',
      'Recognise the surfaces that lose the most grip when wet.',
      'Know how to adjust speed, distance and manoeuvres so you can stop in time on a wet road.',
      'Know when to stop and wait, and why you never cross moving water.'
    ],
    sections: [
      {
        heading: 'The first minutes are the worst',
        paragraphs: [
          'Everyday traffic leaves a thin layer of oil, fuel, dust and tyre rubber on the road. When rain starts after a few dry days, the water lifts that mixture and leaves it floating on the surface. That is why the road is often more slippery at the start of a shower than after a while of heavy rain, when the water has washed part of that layer away.',
          'If the rain catches you, those first minutes are the time to take extra care: slow down, increase your distance and avoid hard braking or sharp turns.'
        ]
      },
      {
        heading: 'Where you lose the most grip',
        paragraphs: [
          'Not every part of a wet road behaves the same. Some surfaces become much slicker than wet asphalt, and on a motorcycle they are the most treacherous, because a single tyre sliding can bring you down.'
        ],
        list: [
          'Painted lines and arrows, and zebra crossings.',
          'Manhole covers, drain grates, steel plates and bridges with metal decks.',
          'Leaves, mud, sand and gravel washed onto the road, especially on downhill stretches and bends.',
          'Oil or diesel patches, common at bus stops, petrol stations and junctions.',
          'Very smooth or worn concrete.'
        ]
      },
      {
        heading: 'More distance to stop',
        paragraphs: [
          'On a wet road, your tyres have less grip and you need more distance to stop from the same speed. Your reaction time doesn’t improve in the rain; if anything, with less visibility you may take longer to notice danger. So the answer is always the same: less speed and more space ahead.',
          'As a practical guide, if you leave at least three seconds to the vehicle ahead in the dry, leave considerably more in the rain. And be smooth: accelerate, brake and steer progressively. On a motorcycle, use both brakes gently and brake with the bike upright, before the bend rather than in it. Sudden inputs are what make a tyre lose grip.',
          'If water builds up on the road, a car can start to “float” on it and the steering feels light. If that happens, don’t brake hard or turn the wheel: ease off the accelerator gradually and let the tyres regain contact.'
        ]
      },
      {
        heading: 'Seeing and being seen in the rain',
        paragraphs: [
          'Rain cuts down what you can see and what others can see of you. Switch your lights on even in daytime, so others can pick you out through the spray and mist. On a motorcycle, a clean visor in good condition is essential; if it fogs up, open it slightly at low speed or stop to clear it. In a car, check that the wipers clear properly and use the demister.',
          'Remember that others see less too. A pedestrian under an umbrella or with their head down may cross without seeing you. A car with fogged windows may not notice your motorcycle in the mirror.'
        ]
      },
      {
        heading: 'Puddles, flooding and when to stop',
        paragraphs: [
          'A puddle can hide a deep pothole, an open drain or loose stones. If you can avoid it safely, do; if not, go through slowly, in a straight line and without braking in the water. When passing pedestrians, slow down so you don’t soak or startle them.',
          'Never try to cross water flowing across the road, a swollen stream or a flooded ford. You can’t know how deep it is or whether the road surface is still there underneath, and moving water can sweep away a motorcycle, a car or a person with far more force than it seems. Wait for it to go down or find another route.',
          'If the rain is so heavy that you can’t see properly or water covers the road, the safest thing is to stop. Find a place off the road, such as a car park, a petrol station or a wide entrance, and wait there. Don’t stop under a bridge over the road, on a bend or on a roadside with no room, where others won’t see you in time.'
        ]
      }
    ],
    example: {
      title: 'The afternoon downpour',
      body: [
        'Picture a young man riding along the main road in the middle of the afternoon, after a week without rain. The first drops start to fall and he carries on at the same speed, thinking the road isn’t wet yet.',
        'Coming up to a bus stop, he brakes hard to avoid the car in front. Right there, where oil collects, his front tyre slides on the painted line. Further on, the road dips down to a stream that is already flowing over the ford.',
        'The safe way looks different: at the first drops he slows down, leaves more space and brakes progressively, before the painted lines. When he sees water flowing over the ford, he stops in a safe place off the road and waits for it to go down. He gets there a little later, but he gets there.'
      ]
    },
    mistakes: [
      'Thinking the road is safer at the start of the rain: the first minutes are often the most slippery.',
      'Braking hard on painted lines or metal covers: they are among the surfaces with the least grip when wet.',
      'Keeping the same gap as in the dry: on a wet road you need more space to stop.',
      'Riding with a fogged visor or no lights: you cut down what you see and what others see of you.',
      'Riding into a large puddle without knowing what’s underneath: it can hide a pothole or an open drain.',
      'Trying to cross moving water: you can’t know how deep it is and it can sweep the vehicle away.'
    ],
    checklist: [
      'At the first drops, slow down.',
      'Leave much more space than in the dry to the vehicle ahead.',
      'Accelerate, brake and steer smoothly.',
      'Avoid braking on paint, metal, leaves or oil patches.',
      'Lights on and a clean visor or windscreen.',
      'Go around puddles when you can do so safely.',
      'Never cross flowing water.',
      'If you can’t see properly, stop somewhere safe off the road and wait.'
    ],
    notes: [
      { kind: 'expert', text: 'WHO recommends adapting speed to road and weather conditions: a speed that is reasonable in the dry can be too high in the rain.' },
      { kind: 'practical', text: 'If you know rain is coming, leave a little earlier or wait for the downpour to pass. Arriving later is better than rushing on a wet road.' },
      { kind: 'law', fact: 'hn-911', text: 'If you see someone trapped by water or a vehicle being swept away, call 911, the national emergency number in Honduras, instead of going into the water.' }
    ],
    check: [
      {
        q: 'It starts to rain after several dry days. When is the road most slippery?',
        options: [
          'During the first minutes of rain.',
          'Only once there are large puddles.',
          'After it has been raining for several hours.'
        ],
        answer: 0,
        explain: 'When the rain starts, the water lifts the layer of oil, dust and residue built up on the road, leaving the surface very slippery.'
      },
      {
        q: 'You see water flowing over a ford. What do you do?',
        options: [
          'Go through fast so you don’t get stuck.',
          'Go through slowly, close to the edge.',
          'Stop in a safe place and wait for it to go down, or find another route.'
        ],
        answer: 2,
        explain: 'You can’t know the depth or whether the road is still there, and moving water can sweep a vehicle away. Never cross it.'
      },
      {
        q: 'What is the most important adjustment when riding or driving in rain?',
        options: [
          'Use only the rear brake.',
          'Less speed, more distance and smooth inputs.',
          'Stay close to the vehicle ahead and follow its tracks.'
        ],
        answer: 1,
        explain: 'On a wet road you need more distance to stop, and sudden inputs are what make you lose grip.'
      }
    ],
    diagramCaption: 'The distances in the diagram are for dry asphalt. On a wet road, braking distance is longer, so in the rain you need less speed and more space.'
  }
};

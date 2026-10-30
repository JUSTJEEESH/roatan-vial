export default {
  id: 'new-drivers',
  category: 'nuevos',
  order: 1,
  minutes: 8,
  diagram: null,
  related: ['safe-overtaking', 'impaired-driving', 'helmet-why', 'calm-driving'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Informe sobre la situación mundial de la seguridad vial 2023',
      labelEn: 'World Health Organization (WHO), Global status report on road safety 2023' },
    { label: 'Organización Mundial de la Salud (OMS), Los jóvenes y la seguridad vial, 2007',
      labelEn: 'World Health Organization (WHO), Youth and road safety, 2007' }
  ],
  es: {
    slug: 'conductores-nuevos-y-jovenes',
    title: 'Conductores nuevos y jóvenes',
    dek: 'Aprender a manejar carro o moto es un paso importante. Los primeros meses son los de más riesgo, y la forma en que empiezas marca el tipo de conductor que vas a ser.',
    objectives: [
      'Entender por qué el primer año al volante es el de mayor riesgo.',
      'Saber por qué conviene formarse y tener licencia antes de manejar.',
      'Organizar un plan de práctica progresivo con un adulto con experiencia.',
      'Reconocer el papel de madres, padres y familias.'
    ],
    sections: [
      {
        heading: 'Por qué el primer año es el más arriesgado',
        paragraphs: [
          'Los estudios sobre conductores nuevos en distintos países coinciden: el riesgo de chocar es más alto en los primeros meses después de empezar a manejar solo, y baja a medida que se gana experiencia. No es cuestión de ser mal conductor. Es que hay habilidades que solo llegan con horas de práctica.',
          'Las razones principales son tres:'
        ],
        list: [
          '<strong>Falta de experiencia:</strong> un conductor nuevo tarda más en detectar peligros, como un niño cerca de la calle, una moto escondida tras un bus o un carro que va a salir de una entrada. Su atención está ocupada en el manejo básico.',
          '<strong>Exceso de confianza:</strong> después de unas semanas sin problemas, es fácil sentir que ya sabes. Esa confianza llega antes que la habilidad real, y lleva a ir más rápido o a rebasar donde no se debe.',
          '<strong>Compañeros en el vehículo:</strong> llevar amigos de la misma edad distrae y puede presionar a correr, a hacer piques o a mostrar “de lo que eres capaz”.'
        ]
      },
      {
        heading: 'Primero formación y licencia',
        paragraphs: [
          'Manejar no se aprende solo mirando a otros. Una buena formación te enseña a controlar el vehículo, a leer las señales y marcas, a mirar correctamente y a anticipar. Busca una escuela de manejo o una persona con experiencia que te enseñe con paciencia, en lugares seguros.',
          'Antes de salir a la vía pública necesitas tu licencia para el tipo de vehículo que vas a manejar. La licencia no es solo un papel: confirma que pasaste por un proceso mínimo de aprendizaje y evaluación. Manejar sin ella te expone a ti y a los demás.'
        ]
      },
      {
        heading: 'Un plan de práctica progresivo',
        paragraphs: [
          'La experiencia se gana mejor por etapas, con un adulto con experiencia sentado a tu lado, o acompañándote de cerca si aprendes en moto. Pasa a la siguiente etapa solo cuando la anterior te salga sin esfuerzo.'
        ],
        list: [
          '<strong>Etapa 1:</strong> lugares sin tráfico, de día. Arrancar, frenar, girar, retroceder y usar espejos.',
          '<strong>Etapa 2:</strong> calles tranquilas, de día y con buen tiempo. Cruces sencillos y velocidades bajas.',
          '<strong>Etapa 3:</strong> carreteras con más tráfico, cuestas y curvas, cruces con buses y motos.',
          '<strong>Etapa 4:</strong> situaciones difíciles: lluvia, noche, tráfico pesado, siempre acompañado al principio.'
        ]
      },
      {
        heading: 'Reglas de oro para los primeros meses',
        paragraphs: [
          'Estas recomendaciones prácticas reducen mucho el riesgo mientras ganas experiencia:'
        ],
        list: [
          '<strong>Nada de teléfono</strong> mientras manejas: ni llamadas, ni mensajes, ni música en la mano. Si necesitas usarlo, detente en un lugar seguro.',
          '<strong>Pocos o ningún pasajero</strong> al principio, sobre todo amigos de tu edad.',
          '<strong>Nada de alcohol ni drogas</strong>, ni una sola bebida antes de manejar.',
          '<strong>Velocidad moderada</strong>, siempre por debajo del límite señalado cuando la vía o el clima lo piden.',
          '<strong>Cinturón o casco</strong> siempre, en cada viaje, por corto que sea.',
          '<strong>Evita manejar cansado o de noche</strong> hasta tener más práctica.'
        ]
      },
      {
        heading: 'El papel de la familia, y por qué un niño no debe manejar',
        paragraphs: [
          'Madres, padres y familiares son los primeros instructores, aunque no lo sepan. Los hijos aprenden más de cómo manejas tú que de lo que les dices. Si usas el cinturón, respetas la velocidad y no tocas el teléfono, eso es lo que van a copiar. Acompaña su práctica, pon reglas claras y habla con calma sobre los riesgos.',
          'Dejar que un niño o un adolescente sin formación ni licencia maneje una moto o un carro en la vía pública es muy peligroso, aunque “ya sepa” y aunque sea un tramo corto. Un menor no tiene todavía el juicio, la experiencia ni, a menudo, la fuerza para reaccionar ante un imprevisto, y en una moto no tiene ninguna protección. Esperar a que tenga la edad, la formación y la licencia es una forma de cuidarlo.'
        ]
      }
    ],
    example: {
      title: 'Imagina: la primera moto',
      body: [
        'Imagina a un joven de la isla que acaba de sacar su licencia y estrena moto. Sus amigos le piden que los lleve a la playa y que vaya rápido por la carretera. Él se siente seguro: ya lleva dos semanas manejando sin problemas.',
        'Su tío, que maneja desde hace muchos años, le propone otra cosa: unas semanas más practicando juntos los fines de semana, primero en calles tranquilas y después en la carretera, sin pasajeros por ahora. Él acepta. En esas salidas aprende a detectar los carros que salen de las entradas y a mirar dos veces en los cruces. Cuando por fin lleva a alguien, lo hace con casco para los dos y con calma.'
      ]
    },
    mistakes: [
      'Manejar antes de tener formación y licencia, porque faltan las habilidades básicas para reaccionar a tiempo.',
      'Confiarse después de unas semanas sin problemas, porque la confianza llega antes que la experiencia.',
      'Llevar a varios amigos desde el principio, porque distraen y presionan a correr.',
      'Usar el teléfono al manejar, porque quita la vista y la mente de la vía.',
      'Saltar directo a la carretera, de noche o con lluvia, porque son situaciones que piden experiencia.',
      'Dejar que un menor maneje “solo un ratito”, porque un imprevisto puede ocurrir en cualquier tramo.'
    ],
    checklist: [
      'Fórmate y saca tu licencia antes de manejar en la vía pública.',
      'Practica por etapas con un adulto con experiencia.',
      'Empieza de día y en calles tranquilas.',
      'Deja el teléfono fuera de tu alcance.',
      'Evita llevar pasajeros los primeros meses.',
      'Cero alcohol y drogas.',
      'Cinturón o casco en cada viaje.',
      'No dejes que un menor sin licencia maneje en la vía pública.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-licencia', text: 'Para manejar se necesita una licencia válida para la categoría del vehículo. Las licencias las emite la autoridad nacional de tránsito (DNVT).' },
      { kind: 'expert', text: 'La OMS, en su Informe sobre la situación mundial de la seguridad vial 2023, señala que los traumatismos causados por el tránsito son la principal causa de muerte de niños y jóvenes de 5 a 29 años en el mundo.' },
      { kind: 'practical', text: 'Algunas familias escriben un acuerdo sencillo con el conductor nuevo: sin teléfono, sin pasajeros los primeros meses, horario de regreso y cero alcohol. Tener las reglas claras evita discusiones.' }
    ],
    check: [
      {
        q: '¿Por qué el riesgo es más alto en los primeros meses de manejar?',
        options: [
          'Porque los vehículos nuevos fallan más.',
          'Porque las carreteras son más peligrosas para los jóvenes.',
          'Por falta de experiencia, exceso de confianza y distracciones como los pasajeros.'
        ],
        answer: 2,
        explain: 'Detectar peligros es una habilidad que se construye con práctica. Mientras tanto, la confianza y los compañeros pueden empujar a tomar riesgos.'
      },
      {
        q: '¿Cuál es una buena forma de empezar a practicar?',
        options: [
          'De día, en calles tranquilas y con un adulto con experiencia.',
          'De noche, cuando hay menos tráfico.',
          'En la carretera principal, para aprender rápido.'
        ],
        answer: 0,
        explain: 'Las condiciones sencillas permiten concentrarse en lo básico. Las situaciones difíciles se dejan para cuando ya hay experiencia.'
      },
      {
        q: 'Un hijo de 13 años dice que ya sabe manejar la moto y quiere ir solo a la pulpería. ¿Qué es lo más seguro?',
        options: [
          'Dejarlo, porque es cerca.',
          'No dejarlo manejar en la vía pública hasta que tenga la edad, la formación y la licencia.',
          'Dejarlo si va despacio.'
        ],
        answer: 1,
        explain: 'Un menor no tiene todavía el juicio ni la experiencia para reaccionar ante un imprevisto, y en moto no tiene protección. Un tramo corto también tiene riesgos.'
      }
    ]
  },
  en: {
    slug: 'new-and-young-drivers',
    title: 'New and young drivers',
    dek: 'Learning to drive a car or ride a motorcycle is a big step. The first months carry the most risk, and the way you start shapes the kind of driver you become.',
    objectives: [
      'Understand why the first year behind the wheel carries the highest risk.',
      'Know why training and a licence should come before driving.',
      'Organise a step-by-step practice plan with an experienced adult.',
      'Recognise the role of parents and families.'
    ],
    sections: [
      {
        heading: 'Why the first year is the riskiest',
        paragraphs: [
          'Studies of new drivers in many countries agree: the risk of crashing is highest in the first months after starting to drive alone, and it falls as experience builds. It is not about being a bad driver. Some skills only come with hours of practice.',
          'There are three main reasons:'
        ],
        list: [
          '<strong>Inexperience:</strong> a new driver takes longer to spot hazards, such as a child near the road, a motorcycle hidden behind a bus or a car about to pull out of a driveway. Their attention is taken up with the basics of driving.',
          '<strong>Overconfidence:</strong> after a few weeks without problems, it is easy to feel you have mastered it. That confidence arrives before real skill does, and it leads to driving faster or overtaking where you should not.',
          '<strong>Friends in the vehicle:</strong> carrying friends your own age is distracting and can create pressure to speed, race (<em>piques</em>) or show “what you can do”.'
        ]
      },
      {
        heading: 'Training and a licence first',
        paragraphs: [
          'You do not learn to drive just by watching others. Good training teaches you to control the vehicle, read signs and markings, look properly and anticipate. Find a driving school or an experienced person who will teach you patiently, in safe places.',
          'Before you go out on public roads, you need a licence for the type of vehicle you will drive. A licence is not just a piece of paper: it confirms you have been through a minimum process of learning and assessment. Driving without one puts you and others at risk.'
        ]
      },
      {
        heading: 'A step-by-step practice plan',
        paragraphs: [
          'Experience is best built in stages, with an experienced adult sitting beside you, or staying close by if you are learning on a motorcycle. Move to the next stage only when the previous one feels effortless.'
        ],
        list: [
          '<strong>Stage 1:</strong> places with no traffic, in daylight. Starting, braking, turning, reversing and using mirrors.',
          '<strong>Stage 2:</strong> quiet streets, in daylight and good weather. Simple junctions and low speeds.',
          '<strong>Stage 3:</strong> busier roads, hills and bends, junctions with buses and motorcycles.',
          '<strong>Stage 4:</strong> difficult conditions: rain, night, heavy traffic, always accompanied at first.'
        ]
      },
      {
        heading: 'Golden rules for the first months',
        paragraphs: [
          'These practical precautions greatly reduce risk while you build experience:'
        ],
        list: [
          '<strong>No phone</strong> while driving: no calls, no messages, no music in your hand. If you need it, stop somewhere safe.',
          '<strong>Few or no passengers</strong> at first, especially friends your own age.',
          '<strong>No alcohol or drugs</strong>, not even one drink before driving.',
          '<strong>Moderate speed</strong>, below the posted limit whenever the road or weather calls for it.',
          '<strong>Seatbelt or helmet</strong> every time, on every trip, however short.',
          '<strong>Avoid driving tired or at night</strong> until you have more practice.'
        ]
      },
      {
        heading: 'The family’s role, and why a child should not drive',
        paragraphs: [
          'Parents and relatives are the first instructors, whether they realise it or not. Children learn more from how you drive than from what you tell them. If you wear your seatbelt, respect the speed limit and leave your phone alone, that is what they will copy. Go out with them while they practise, set clear rules and talk calmly about the risks.',
          'Letting a child or teenager with no training and no licence drive a motorcycle or car on public roads is very dangerous, even if they “already know how” and even for a short trip. A young person does not yet have the judgement, the experience or often the strength to react to something unexpected, and on a motorcycle they have no protection. Waiting until they have the age, the training and the licence is a way of looking after them.'
        ]
      }
    ],
    example: {
      title: 'Picture this: a first motorcycle',
      body: [
        'Picture a young islander who has just got his licence and his first motorcycle. His friends ask him to take them to the beach and to go fast along the road. He feels confident: he has been riding for two weeks without any trouble.',
        'His uncle, who has been riding for many years, suggests something else: a few more weeks practising together at weekends, first on quiet streets and then on the main road, with no passengers for now. He agrees. On those rides he learns to spot cars pulling out of driveways and to look twice at junctions. When he finally carries someone, he does it calmly, with helmets on both of them.'
      ]
    },
    mistakes: [
      'Driving before getting training and a licence, because the basic skills to react in time are missing.',
      'Becoming overconfident after a few trouble-free weeks, because confidence arrives before experience.',
      'Carrying several friends from the start, because they distract you and push you to speed.',
      'Using a phone while driving, because it takes your eyes and mind off the road.',
      'Jumping straight to the main road, night-time or rain, because those situations need experience.',
      'Letting a child drive “just for a minute”, because something unexpected can happen on any stretch.'
    ],
    checklist: [
      'Get trained and licensed before driving on public roads.',
      'Practise in stages with an experienced adult.',
      'Start in daylight on quiet streets.',
      'Keep your phone out of reach.',
      'Avoid carrying passengers for the first months.',
      'Zero alcohol and drugs.',
      'Seatbelt or helmet on every trip.',
      'Do not let an unlicensed child drive on public roads.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-licencia', text: 'Driving requires a valid licence for the vehicle category. Licences are issued by the national traffic authority (DNVT).' },
      { kind: 'expert', text: 'In its Global status report on road safety 2023, WHO notes that road traffic injuries are the leading cause of death for children and young people aged 5 to 29 worldwide.' },
      { kind: 'practical', text: 'Some families write a simple agreement with a new driver: no phone, no passengers for the first months, a time to be home and zero alcohol. Clear rules avoid arguments.' }
    ],
    check: [
      {
        q: 'Why is the risk higher in the first months of driving?',
        options: [
          'Because new vehicles break down more often.',
          'Because roads are more dangerous for young people.',
          'Because of inexperience, overconfidence and distractions such as passengers.'
        ],
        answer: 2,
        explain: 'Spotting hazards is a skill built through practice. Meanwhile, confidence and friends can push new drivers to take risks.'
      },
      {
        q: 'What is a good way to start practising?',
        options: [
          'In daylight, on quiet streets, with an experienced adult.',
          'At night, when there is less traffic.',
          'On the main road, to learn quickly.'
        ],
        answer: 0,
        explain: 'Simple conditions let you concentrate on the basics. Difficult situations come later, once you have experience.'
      },
      {
        q: 'A 13-year-old says they already know how to ride the motorcycle and wants to go to the corner shop alone. What is safest?',
        options: [
          'Let them, because it is close.',
          'Do not let them ride on public roads until they have the age, the training and the licence.',
          'Let them if they go slowly.'
        ],
        answer: 1,
        explain: 'A young person does not yet have the judgement or experience to react to something unexpected, and on a motorcycle they have no protection. A short trip still carries risk.'
      }
    ]
  }
};

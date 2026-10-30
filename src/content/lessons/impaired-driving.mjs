export default {
  id: 'impaired-driving',
  category: 'alcohol',
  order: 1,
  minutes: 8,
  diagram: null,
  related: ['calm-driving', 'road-emergency', 'stopping-distance', 'night-visibility'],
  sources: [
    { label: 'Global Road Safety Partnership, FIA Foundation, Organización Mundial de la Salud y Banco Mundial, Alcohol y conducción: manual de seguridad vial para decisores y profesionales, 2007',
      labelEn: 'Global Road Safety Partnership, FIA Foundation, World Health Organization and World Bank, Drinking and driving: a road safety manual for decision-makers and practitioners, 2007' },
    { label: 'Organización Mundial de la Salud (OMS), Informe sobre la situación mundial de la seguridad vial 2023',
      labelEn: 'World Health Organization (WHO), Global status report on road safety 2023' }
  ],
  es: {
    slug: 'alcohol-drogas-y-cansancio-al-volante',
    title: 'Alcohol, drogas y cansancio al volante',
    dek: 'Manejar o andar en moto bajo los efectos del alcohol, de drogas o con mucho sueño pone en riesgo a todos en la calle. Aprende a reconocerlo, a evitarlo y a actuar cuando lo ves.',
    objectives: [
      'Entender cómo el alcohol afecta la reacción, el juicio, la vista y la coordinación, aun en poca cantidad.',
      'Saber que algunas drogas, medicamentos y el cansancio también deterioran la capacidad de manejar.',
      'Reconocer las señales de un conductor afectado y qué hacer sin ponerte en peligro.',
      'Planificar antes de tomar y saber cómo frenar a un amigo que quiere manejar.'
    ],
    sections: [
      {
        heading: 'Qué le hace el alcohol a quien maneja',
        paragraphs: [
          'El alcohol llega al cerebro poco después de tomarlo y empieza a afectar las capacidades que necesitas para manejar mucho antes de que te sientas borracho. Ese es el problema principal: los primeros efectos que desaparecen son el juicio y la autocrítica, así que la persona se siente capaz justo cuando ya no lo es.',
          'Según los manuales de la OMS y sus socios, el riesgo de chocar aumenta desde niveles bajos de alcohol y crece rápidamente a medida que se toma más. No existe una cantidad que sea segura para todos: el efecto depende del peso, de si comiste, del cansancio y de cada cuerpo. Ni el café, ni el agua fría, ni una siesta corta bajan el alcohol de la sangre; solo el tiempo lo hace.'
        ],
        list: [
          '<strong>Reacción más lenta:</strong> tardas más en ver el peligro y en pisar el freno, y el vehículo recorre más metros antes de detenerse.',
          '<strong>Juicio alterado:</strong> calculas mal la velocidad y la distancia, y te arriesgas más al rebasar o en las curvas.',
          '<strong>Vista afectada:</strong> te cuesta enfocar, ver a los lados y recuperarte del deslumbramiento de los faros de noche.',
          '<strong>Menos coordinación:</strong> manejar el timón, el clutch o el equilibrio de una moto se vuelve torpe.'
        ]
      },
      {
        heading: 'Drogas, medicamentos y cansancio',
        paragraphs: [
          'No solo el alcohol afecta. La marihuana y otras drogas alteran la atención, el tiempo de reacción y la percepción, y mezcladas con alcohol el efecto empeora. Algunos medicamentos, incluidos ciertos antialérgicos, calmantes fuertes, pastillas para dormir y remedios para la gripe, pueden dar sueño o mareo. Lee la etiqueta y pregunta al médico o al farmacéutico si puedes manejar con lo que estás tomando.',
          'El cansancio también es una forma de deterioro. Quien maneja después de un turno largo o de una noche sin dormir reacciona más lento, se distrae y puede quedarse dormido unos segundos sin darse cuenta. Si bostezas sin parar, se te cierran los ojos o no recuerdas los últimos minutos del camino, detente en un lugar seguro. La única cura para el sueño es dormir.'
        ]
      },
      {
        heading: 'Cómo reconocer a un conductor afectado',
        paragraphs: [
          'Un conductor bajo los efectos del alcohol, de drogas o con mucho sueño suele mostrar señales que se ven desde lejos. Ninguna por sí sola es prueba, pero si ves varias juntas, trátalo como un peligro.',
          'Lo que debes hacer es protegerte primero. Aumenta la distancia: déjalo ir adelante o, si viene detrás, apártate cuando sea seguro y déjalo pasar. No intentes rebasarlo en un tramo dudoso, no le hagas señas, no lo persigas ni lo enfrentes. Si puedes hacerlo con seguridad, detente o pide a un pasajero que llame al 911 y dé el lugar, la dirección, el tipo y color del vehículo y, si la viste, la placa. Nunca uses el teléfono mientras manejas para hacer esa llamada.'
        ],
        list: [
          'Zigzaguea o se sale de su carril.',
          'Cambia de velocidad sin razón: acelera y frena una y otra vez.',
          'Frena tarde o de golpe, o se detiene sin motivo.',
          'Va muy cerca de otros vehículos o de la orilla.',
          'Maneja de noche sin luces o tarda en reaccionar a otros.'
        ]
      },
      {
        heading: 'Planifica antes de tomar',
        paragraphs: [
          'La decisión más fácil de tomar es la que haces antes del primer trago, cuando todavía piensas con claridad. Si vas a una fiesta, a la playa o a ver un partido y sabes que vas a tomar, decide desde antes cómo vas a regresar.',
          'Hay opciones sencillas: un conductor designado que no tome nada esa noche, un taxi o mototaxi de confianza, que alguien sobrio pase por ti, o quedarte a dormir donde estás. Dejar el carro o la moto y recogerla al día siguiente cuesta mucho menos que cualquier choque. Y si te tomaste algo, no te subas como pasajero con alguien que también tomó.'
        ]
      },
      {
        heading: 'Cómo frenar a un amigo',
        paragraphs: [
          'Decirle a alguien que no está en condiciones de manejar no es fácil, pero es una de las cosas más valiosas que puedes hacer por esa persona y por quienes van a estar en su camino. Habla con calma, sin humillarlo delante de otros. Ofrécele alternativas concretas: “Yo te llevo”, “Te pido un taxi”, “Quédate aquí esta noche”.',
          'Pide apoyo a otros amigos o familiares si se resiste. Si es posible, guarda las llaves. Si aun así se va y crees que hay un peligro real, puedes llamar al 911. Es mejor que se enoje contigo una noche a que no llegue a su casa.'
        ]
      }
    ],
    example: {
      title: 'La última del cumpleaños',
      body: [
        'Imagina una celebración en una casa a la orilla del mar. Un muchacho que vino en moto se ha tomado varias cervezas y dice que está bien, que su casa queda cerca y que conoce el camino. Es de noche, la calle tiene curvas y poca luz.',
        'Uno de sus amigos le dice tranquilo: “Hermano, deja la moto aquí, yo te llevo en el carro y mañana vienes por ella”. Otro le guarda las llaves mientras tanto. El muchacho protesta un rato y al final acepta. Al día siguiente recoge su moto, entera, y nadie tuvo que lamentar nada. Ese gesto no tuvo nada de exagerado: fue lo que hace un buen amigo.'
      ]
    },
    mistakes: [
      'Creer que unas pocas cervezas no afectan, porque el juicio es lo primero que falla y uno no lo nota.',
      'Pensar que el café o una ducha fría quitan el efecto, porque solo el tiempo elimina el alcohol de la sangre.',
      'Manejar con mucho sueño “porque ya falta poco”, porque los microsueños pueden durar varios segundos sin que te des cuenta.',
      'Tomar un medicamento sin leer si da sueño, porque algunos afectan la reacción tanto como el alcohol.',
      'Perseguir o enfrentar a un conductor que maneja mal, porque te pones en peligro tú también.',
      'Subirte con alguien que tomó para no hacer un desaire, porque tu vida vale más que la incomodidad del momento.'
    ],
    checklist: [
      'Si vas a tomar, decide antes cómo vas a regresar.',
      'Elige un conductor designado, un taxi o quédate a dormir.',
      'No manejes con sueño: detente y descansa.',
      'Revisa si tus medicamentos dan sueño antes de manejar.',
      'Ante un conductor que zigzaguea, aumenta la distancia y no lo enfrentes.',
      'Si es seguro, que un pasajero o tú, detenido, llame al 911 con la ubicación y el vehículo.',
      'Frena con calma a un amigo que quiere manejar después de tomar.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-ebriedad', text: 'Manejar bajo los efectos del alcohol está clasificado como infracción grave (Art. 98, según lo reportado) y también se sanciona bajo otra ley; entre las sanciones reportadas está la suspensión de la licencia.' },
      { kind: 'law', fact: 'hn-911', text: 'El 911 es el número nacional de emergencias en Honduras.' },
      { kind: 'expert', text: 'Los manuales de la OMS y sus socios señalan que el riesgo de choque aumenta desde niveles bajos de alcohol en sangre y crece de forma acelerada a medida que el nivel sube.' }
    ],
    check: [
      {
        q: '¿Por qué una persona que ha tomado suele creer que puede manejar?',
        options: [
          'Porque el alcohol mejora los reflejos al principio.',
          'Porque el alcohol afecta primero el juicio, y la persona no nota su propio deterioro.',
          'Porque el efecto del alcohol solo empieza horas después.'
        ],
        answer: 1,
        explain: 'El juicio y la autocrítica son de lo primero que se afecta. Por eso la persona se siente bien justo cuando ya no está en condiciones.'
      },
      {
        q: 'Vas manejando y el carro de adelante zigzaguea y frena sin motivo. ¿Qué es lo más seguro?',
        options: [
          'Aumentar la distancia y, si es seguro, que alguien llame al 911.',
          'Rebasarlo rápido para alejarte de él.',
          'Acercarte y tocarle la bocina para que reaccione.'
        ],
        answer: 0,
        explain: 'Lo primero es protegerte con distancia. Rebasarlo o enfrentarlo te expone a su próximo movimiento impredecible.'
      },
      {
        q: 'Después de una noche sin dormir, ¿qué te conviene hacer antes de un viaje en carro?',
        options: [
          'Tomarte un café grande y salir.',
          'Abrir la ventana y subir el volumen de la música.',
          'Descansar o pedir que maneje otra persona, porque el cansancio también deteriora.'
        ],
        answer: 2,
        explain: 'El cansancio reduce la atención y la reacción, y puede causar microsueños. Los trucos no lo resuelven; solo el descanso.'
      }
    ]
  },
  en: {
    slug: 'alcohol-drugs-and-fatigue-at-the-wheel',
    title: 'Alcohol, drugs and fatigue at the wheel',
    dek: 'Driving or riding under the influence of alcohol or drugs, or while very tired, puts everyone on the road at risk. Learn to recognise it, prevent it and respond when you see it.',
    objectives: [
      'Understand how alcohol affects reaction time, judgement, vision and coordination, even in small amounts.',
      'Know that some drugs, medicines and fatigue also impair driving.',
      'Recognise the signs of an impaired driver and what to do without putting yourself in danger.',
      'Plan before drinking and know how to stop a friend who wants to drive.'
    ],
    sections: [
      {
        heading: 'What alcohol does to a driver',
        paragraphs: [
          'Alcohol reaches the brain soon after you drink it and starts to affect the skills you need for driving long before you feel drunk. That is the core problem: judgement and self-criticism are among the first things to go, so a person feels capable exactly when they no longer are.',
          'According to manuals from the WHO and its partners, crash risk rises from low levels of alcohol and climbs quickly the more someone drinks. There is no amount that is safe for everyone: the effect depends on body weight, whether you have eaten, how tired you are and your own body. Coffee, cold water and a short nap do not lower blood alcohol; only time does.'
        ],
        list: [
          '<strong>Slower reactions:</strong> you take longer to see danger and hit the brake, and the vehicle travels further before it stops.',
          '<strong>Poor judgement:</strong> you misjudge speed and distance, and take more risks when overtaking or on bends.',
          '<strong>Affected vision:</strong> it is harder to focus, see to the sides and recover from headlight glare at night.',
          '<strong>Less coordination:</strong> steering, using the clutch or balancing a motorcycle becomes clumsy.'
        ]
      },
      {
        heading: 'Drugs, medicines and fatigue',
        paragraphs: [
          'Alcohol is not the only problem. Cannabis and other drugs affect attention, reaction time and perception, and mixed with alcohol the effect is worse. Some medicines, including certain antihistamines, strong painkillers, sleeping pills and cold remedies, can cause drowsiness or dizziness. Read the label and ask a doctor or pharmacist whether you can drive on what you are taking.',
          'Fatigue is impairment too. Someone driving after a long shift or a sleepless night reacts more slowly, loses focus and can nod off for a few seconds without realising. If you keep yawning, your eyes are closing or you cannot remember the last few minutes of road, stop somewhere safe. The only cure for tiredness is sleep.'
        ]
      },
      {
        heading: 'How to recognise an impaired driver',
        paragraphs: [
          'A driver under the influence of alcohol or drugs, or who is very tired, usually shows signs you can spot from a distance. No single sign proves anything, but if you see several together, treat it as a hazard.',
          'Your first job is to protect yourself. Increase the gap: let them go ahead or, if they are behind you, pull over when it is safe and let them pass. Do not try to overtake them on a doubtful stretch, do not gesture at them, chase them or confront them. If you can do so safely, stop, or ask a passenger to call 911 and give the location, direction of travel, the make and colour of the vehicle and, if you saw it, the plate number. Never use your phone while driving to make that call.'
        ],
        list: [
          'Weaving or drifting out of their lane.',
          'Changing speed for no reason: speeding up and slowing down again and again.',
          'Braking late or suddenly, or stopping for no reason.',
          'Driving very close to other vehicles or to the edge of the road.',
          'Driving at night without lights, or reacting slowly to others.'
        ]
      },
      {
        heading: 'Plan before you drink',
        paragraphs: [
          'The easiest decision is the one you make before the first drink, while you are still thinking clearly. If you are going to a party, the beach or a match and you know you will drink, decide beforehand how you will get home.',
          'There are simple options: a designated driver who drinks nothing that night, a taxi or mototaxi you trust, a sober person to collect you, or staying over where you are. Leaving the car or motorcycle and picking it up the next day costs far less than any crash. And if you have been drinking, do not ride as a passenger with someone else who has been drinking too.'
        ]
      },
      {
        heading: 'How to stop a friend',
        paragraphs: [
          'Telling someone they are in no state to drive is not easy, but it is one of the most valuable things you can do for them and for everyone who will be on their route. Speak calmly and do not embarrass them in front of others. Offer concrete alternatives: “I’ll drive you”, “I’ll call you a taxi”, “Stay here tonight”.',
          'Ask other friends or family for support if they resist. If you can, hold on to the keys. If they still leave and you believe there is a real danger, you can call 911. Better that they are angry with you for one night than that they never make it home.'
        ]
      }
    ],
    example: {
      title: 'One for the road at the birthday party',
      body: [
        'Picture a celebration at a house by the sea. A young man who came on his motorcycle has had several beers and says he is fine, that he lives close by and knows the road. It is night, and the road is winding and poorly lit.',
        'One of his friends says calmly, “Leave the bike here, I’ll take you in the car and you can come back for it tomorrow.” Another friend holds on to his keys in the meantime. He grumbles for a while and then agrees. The next day he collects his motorcycle, in one piece, and nobody has anything to regret. There was nothing over the top about that: it is what a good friend does.'
      ]
    },
    mistakes: [
      'Believing a few beers have no effect, because judgement is the first thing to slip and you do not notice it.',
      'Thinking coffee or a cold shower will sober you up, because only time removes alcohol from the blood.',
      'Driving while very sleepy “because it’s not far now”, because micro-sleeps can last several seconds without you noticing.',
      'Taking a medicine without checking whether it causes drowsiness, because some affect reactions as much as alcohol.',
      'Chasing or confronting a driver who is driving badly, because you put yourself in danger too.',
      'Getting in with someone who has been drinking to avoid offending them, because your life is worth more than a moment of awkwardness.'
    ],
    checklist: [
      'If you will drink, decide beforehand how you will get home.',
      'Choose a designated driver, take a taxi or stay over.',
      'Do not drive while sleepy: stop and rest.',
      'Check whether your medicines cause drowsiness before driving.',
      'If a driver is weaving, increase your distance and do not confront them.',
      'If it is safe, have a passenger, or yourself once stopped, call 911 with the location and vehicle details.',
      'Calmly stop a friend who wants to drive after drinking.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-ebriedad', text: 'Driving under the influence of alcohol is classed as a serious infraction (Art. 98, as reported) and is also sanctioned under a separate law; reported penalties include licence suspension.' },
      { kind: 'law', fact: 'hn-911', text: '911 is the national emergency number in Honduras.' },
      { kind: 'expert', text: 'Manuals from the WHO and its partners note that crash risk rises from low blood alcohol levels and increases steeply as the level goes up.' }
    ],
    check: [
      {
        q: 'Why does someone who has been drinking often believe they can drive?',
        options: [
          'Because alcohol sharpens reflexes at first.',
          'Because alcohol affects judgement first, so the person does not notice their own impairment.',
          'Because alcohol only takes effect hours later.'
        ],
        answer: 1,
        explain: 'Judgement and self-criticism are among the first things affected. That is why people feel fine exactly when they are no longer fit to drive.'
      },
      {
        q: 'The car in front of you is weaving and braking for no reason. What is safest?',
        options: [
          'Increase your distance and, if it is safe, have someone call 911.',
          'Overtake quickly to get away from it.',
          'Close up and sound your horn so the driver reacts.'
        ],
        answer: 0,
        explain: 'Your first priority is to protect yourself with distance. Overtaking or confronting the driver exposes you to their next unpredictable move.'
      },
      {
        q: 'After a night without sleep, what should you do before a car journey?',
        options: [
          'Drink a large coffee and set off.',
          'Open the window and turn the music up.',
          'Rest or let someone else drive, because fatigue impairs driving too.'
        ],
        answer: 2,
        explain: 'Fatigue reduces attention and slows reactions, and can cause micro-sleeps. Tricks do not fix it; only rest does.'
      }
    ]
  }
};

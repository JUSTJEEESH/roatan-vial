export default {
  id: 'night-visibility',
  category: 'noche',
  order: 1,
  minutes: 7,
  diagram: 'night-visibility',
  related: ['stopping-distance', 'pedestrian-safety', 'watch-for-motorcycles', 'rain-riding'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners (en inglés), 2017',
      labelEn: 'World Health Organization (WHO), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners, 2017' },
    { label: 'Organización Mundial de la Salud (OMS), Informe sobre la situación mundial de la seguridad vial 2023',
      labelEn: 'World Health Organization (WHO), Global status report on road safety 2023' }
  ],
  es: {
    slug: 'ver-y-ser-visto-de-noche',
    title: 'De noche: ver y ser visto',
    dek: 'Cuando se va la luz del sol, la carretera es la misma, pero tú ves menos y los demás te ven menos. Manejar de noche con seguridad depende de compensar las dos cosas.',
    objectives: [
      'Entender por qué de noche es más difícil ver y ser visto, sobre todo en moto o a pie.',
      'Saber qué hacer para que otros te vean: luces, ropa clara y elementos reflectivos.',
      'Saber qué hacer para ver mejor: visor limpio, luces bien ajustadas y velocidad dentro del alcance de tus luces.',
      'Reconocer los riesgos del deslumbramiento, de los peatones y animales en calles oscuras y del cansancio.'
    ],
    sections: [
      {
        heading: 'Ser visto: que los demás sepan que estás ahí',
        paragraphs: [
          'De noche, un conductor ve sobre todo lo que sus luces alumbran y lo que refleja esa luz. Una moto es pequeña, tiene una sola luz delantera y desde lejos se confunde fácilmente con las luces de fondo. Una persona caminando con ropa oscura en una calle sin alumbrado puede ser casi invisible hasta que está muy cerca.',
          'Lo reflectivo hace una diferencia grande, porque devuelve la luz de los faros hacia el conductor que viene. Un chaleco o una franja reflectiva en el cuerpo y en el casco se ven desde mucho más lejos que la ropa normal, aunque esa ropa sea de color claro.'
        ],
        list: [
          'Enciende siempre las luces delanteras y traseras, también al atardecer y al amanecer.',
          'Usa chaleco reflectivo o franjas reflectivas en el torso y, si puedes, en el casco.',
          'Prefiere ropa de colores claros; la ropa oscura desaparece en la noche.',
          'Revisa que la luz trasera y la de freno funcionen: son lo que ve el que viene detrás.',
          'Mantén limpios los focos y los reflectores de la moto o del carro.'
        ]
      },
      {
        heading: 'Ver: tu visión también necesita ayuda',
        paragraphs: [
          'Ser visto es la mitad del trabajo. La otra mitad es ver a tiempo. De noche, los ojos captan menos detalle, distinguen peor las distancias y tardan en recuperarse después de una luz fuerte.',
          'Para el motociclista, el visor es clave. Un visor rayado o sucio dispersa la luz de los carros que vienen de frente y convierte cada foco en un manchón brillante. Un visor polarizado u oscuro, útil de día, de noche te quita una visibilidad que no puedes perder: guárdalo para el día y usa un visor transparente cuando oscurece.'
        ],
        list: [
          'Limpia el visor o el parabrisas antes de salir de noche; reemplaza un visor muy rayado.',
          'Nada de visor oscuro ni lentes oscuros de noche.',
          'Revisa que tus luces estén bien alineadas: muy bajas no alumbran lo suficiente; muy altas deslumbran a los demás.',
          'Usa la luz alta en calles oscuras sin tráfico y bájala a tiempo cuando venga alguien de frente o vayas detrás de otro vehículo.'
        ]
      },
      {
        heading: 'Velocidad dentro del alcance de tus luces',
        paragraphs: [
          'Esta es la regla más importante de la noche: tienes que poder detenerte dentro del tramo de calle que tus luces iluminan. Si un obstáculo aparece en el borde de la luz y tu distancia de frenado es mayor que esa distancia, vas a llegar a él antes de poder parar.',
          'La distancia de frenado no cambia de noche, pero lo que ves por delante sí se acorta, sobre todo con luz baja. Por eso, de noche hay que ir más despacio que de día por la misma calle, aunque esté vacía. Si sientes que algo “aparece de repente” en tu luz, es una señal clara de que vas demasiado rápido para lo que ves.'
        ]
      },
      {
        heading: 'Deslumbramiento, peatones, animales y cansancio',
        paragraphs: [
          'Cuando un vehículo viene de frente con luz alta, no mires directamente a sus focos. Lleva la vista hacia el borde derecho de tu carril, reduce la velocidad y sigue la orilla hasta que pase. Durante esos segundos estás manejando casi a ciegas, así que baja la velocidad antes, no después.',
          'En calles sin alumbrado hay que esperar a peatones caminando por la orilla, ciclistas sin luces, perros, caballos o ganado. Muchas veces lo primero que se ve son unos ojos que brillan o un reflejo pequeño. Ante cualquier forma que no identificas, suelta el acelerador y prepárate para frenar.',
          'El cansancio es el otro riesgo de la noche. Después de un día de trabajo, el cuerpo pide dormir y la reacción se vuelve más lenta. Bostezos seguidos, ojos pesados o no recordar el último tramo son señales para parar en un lugar seguro. Ninguna ventana abierta ni música alta reemplaza el descanso.'
        ]
      }
    ],
    example: {
      title: 'Regreso a casa después del turno',
      body: [
        'Imagina a una mujer que sale de trabajar a las nueve de la noche y regresa en moto por una calle sin alumbrado. Lleva camisa oscura, el visor polarizado que usa de día y la luz trasera de la moto lleva semanas fundida.',
        'Un pickup que viene detrás solo la distingue cuando ya está muy cerca. Más adelante, un carro de frente viene con luz alta; ella mira directo a los focos y por unos segundos no ve la orilla, donde camina un señor con una bolsa de compras.',
        'Con pocos cambios, la misma noche es otra: chaleco reflectivo encima de la camisa, visor transparente, la luz trasera reparada y una velocidad que le permita frenar dentro de lo que alumbra su foco. Cuando viene el carro con luz alta, baja la velocidad y mira hacia la orilla derecha, donde ahora sí ve al señor a tiempo.'
      ]
    },
    mistakes: [
      'Usar visor oscuro o lentes oscuros de noche: reducen justo la luz que necesitas para ver.',
      'Manejar con la luz trasera fundida: el que viene detrás no te ve hasta que está encima.',
      'Ir a la misma velocidad que de día: de noche ves menos camino y tu distancia de frenado no se acorta.',
      'Mirar directamente los focos del que viene de frente: el deslumbramiento te deja sin ver la orilla por varios segundos.',
      'Dejar la luz alta puesta frente a otros vehículos: deslumbras a quien viene y aumentas el riesgo para todos.',
      'Seguir manejando con mucho sueño: el cansancio hace la reacción más lenta, igual que otros tipos de distracción.'
    ],
    checklist: [
      'Luces delanteras y traseras encendidas y funcionando.',
      'Chaleco o franjas reflectivas puestas, para conductor y pasajero.',
      'Ropa de color claro cuando sea posible.',
      'Visor transparente y limpio; nada de visor oscuro de noche.',
      'Velocidad que te permita frenar dentro de lo que alumbran tus luces.',
      'Ante un vehículo con luz alta: baja la velocidad y mira hacia la orilla derecha.',
      'Espera peatones y animales en calles oscuras.',
      'Si tienes sueño, para en un lugar seguro.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-moto-reflectivo', text: 'Desde la reforma de marzo de 2026 (Decreto 22-2026), el conductor y el pasajero de una motocicleta deben usar chaleco reflectivo o una marca reflectiva entre las 6:00 p. m. y las 6:00 a. m.' },
      { kind: 'expert', text: 'La OMS incluye la visibilidad de las motocicletas entre las medidas para reducir choques: luces encendidas y ropa o elementos de alta visibilidad ayudan a que otros conductores las detecten a tiempo.' },
      { kind: 'practical', text: 'Lleva siempre un chaleco reflectivo en la moto o en el carro. Si te toca caminar o detenerte en la orilla de noche, póntelo antes de bajarte.' }
    ],
    check: [
      {
        q: 'Vas en moto de noche. ¿Qué visor es el adecuado?',
        options: [
          'Un visor polarizado, para que no te deslumbren.',
          'Un visor transparente y limpio.',
          'Ninguno: es mejor levantar el visor para ver mejor.'
        ],
        answer: 1,
        explain: 'De noche hace falta toda la luz posible. Un visor oscuro reduce la visibilidad y uno sucio o rayado dispersa la luz de los focos.'
      },
      {
        q: 'Un carro viene de frente con la luz alta y te deslumbra. ¿Qué haces?',
        options: [
          'Reducir la velocidad y llevar la vista hacia la orilla derecha de tu carril.',
          'Poner tu luz alta también para que la baje.',
          'Mirar fijamente sus focos para calcular la distancia.'
        ],
        answer: 0,
        explain: 'Mirar los focos te deja sin ver por varios segundos. Bajando la velocidad y siguiendo la orilla mantienes la referencia sin encandilarte.'
      },
      {
        q: '¿Cuál es la regla clave de velocidad de noche?',
        options: [
          'La misma velocidad que de día si la calle está vacía.',
          'Ir rápido para pasar menos tiempo en la oscuridad.',
          'Poder detenerte dentro del tramo que iluminan tus luces.'
        ],
        answer: 2,
        explain: 'Tu distancia de frenado no se acorta de noche, pero lo que ves sí. Si no puedes parar dentro de lo que alumbras, vas demasiado rápido.'
      }
    ],
    diagramCaption: 'De noche, una persona con ropa oscura se distingue mucho más tarde que una con ropa clara, y una con elementos reflectivos se ve desde mucho más lejos. Tu velocidad debe permitirte frenar dentro de lo que alumbran tus luces.'
  },
  en: {
    slug: 'see-and-be-seen-at-night',
    title: 'At night: see and be seen',
    dek: 'When the sun goes down, the road is the same, but you see less and others see less of you. Riding and driving safely at night means making up for both.',
    objectives: [
      'Understand why it is harder to see and be seen at night, especially on a motorcycle or on foot.',
      'Know what to do so others can see you: lights, light-coloured clothing and reflective gear.',
      'Know what to do to see better: a clean visor, well-aimed lights and a speed within the reach of your lights.',
      'Recognise the risks of glare, of pedestrians and animals on unlit roads, and of fatigue.'
    ],
    sections: [
      {
        heading: 'Being seen: letting others know you’re there',
        paragraphs: [
          'At night, a driver mainly sees what their headlights light up and what reflects that light back. A motorcycle is small, has a single headlight and from a distance is easily lost among the lights behind it. A person walking in dark clothes on an unlit road can be almost invisible until they are very close.',
          'Reflective material makes a big difference, because it sends headlight beams straight back to the approaching driver. A vest or reflective strips on your body and helmet can be seen from much further away than ordinary clothing, even light-coloured clothing.'
        ],
        list: [
          'Always switch on your front and rear lights, including at dusk and dawn.',
          'Wear a reflective vest or reflective strips on your torso and, if you can, on your helmet.',
          'Choose light-coloured clothing; dark clothes disappear at night.',
          'Check that your tail light and brake light work: they are what the driver behind you sees.',
          'Keep the lights and reflectors on your motorcycle or car clean.'
        ]
      },
      {
        heading: 'Seeing: your eyes need help too',
        paragraphs: [
          'Being seen is half the job. The other half is seeing in time. At night, your eyes pick up less detail, judge distance less well and take time to recover after a bright light.',
          'For riders, the visor is key. A scratched or dirty visor scatters the light from oncoming cars and turns every headlight into a bright smear. A tinted or dark visor, useful in daytime, takes away visibility you cannot afford to lose at night: keep it for the day and use a clear visor when it gets dark.'
        ],
        list: [
          'Clean your visor or windscreen before setting off at night; replace a badly scratched visor.',
          'No tinted visor and no sunglasses at night.',
          'Check that your headlights are properly aimed: too low and they don’t light enough road; too high and they dazzle others.',
          'Use high beam on dark roads with no traffic and dip it in good time when someone comes towards you or you are following another vehicle.'
        ]
      },
      {
        heading: 'Keep your speed within your lights',
        paragraphs: [
          'This is the most important rule of night riding and driving: you must be able to stop within the stretch of road your lights illuminate. If an obstacle appears at the edge of your light and your stopping distance is longer than that, you will reach it before you can stop.',
          'Your stopping distance doesn’t change at night, but what you can see ahead does get shorter, especially on low beam. That is why you need to go slower at night than in daytime on the same road, even when it is empty. If things seem to “appear out of nowhere” in your headlight, that is a clear sign you are going too fast for what you can see.'
        ]
      },
      {
        heading: 'Glare, pedestrians, animals and fatigue',
        paragraphs: [
          'When an oncoming vehicle has its high beam on, don’t look straight at its lights. Move your eyes to the right-hand edge of your lane, slow down and follow the edge until it has passed. For those few seconds you are driving almost blind, so slow down before, not after.',
          'On unlit roads, expect people walking along the edge, cyclists without lights, dogs, horses or cattle. Often the first thing you see is a pair of shining eyes or a small reflection. Whenever you see a shape you can’t identify, ease off the throttle and get ready to brake.',
          'Fatigue is the other night-time risk. After a day’s work, the body wants sleep and reactions slow down. Repeated yawning, heavy eyes or not remembering the last stretch of road are signs to stop somewhere safe. No open window or loud music replaces rest.'
        ]
      }
    ],
    example: {
      title: 'Heading home after a shift',
      body: [
        'Picture a woman finishing work at nine at night and riding home on an unlit road. She is wearing a dark shirt and the tinted visor she uses in the daytime, and her motorcycle’s tail light has been out for weeks.',
        'A pickup coming up behind her only makes her out when it is already very close. Further on, an oncoming car has its high beam on; she looks straight into the lights and for a few seconds can’t see the roadside, where a man is walking with a shopping bag.',
        'With a few changes, the same night is different: a reflective vest over her shirt, a clear visor, the tail light fixed and a speed that lets her stop within what her headlight shows. When the car with high beam comes, she slows down and looks to the right-hand edge, where this time she sees the man in time.'
      ]
    },
    mistakes: [
      'Using a tinted visor or sunglasses at night: they cut exactly the light you need to see.',
      'Riding with a dead tail light: the driver behind can’t see you until they are right on top of you.',
      'Riding at your daytime speed: at night you see less road and your stopping distance doesn’t get shorter.',
      'Looking straight into oncoming headlights: the glare leaves you unable to see the roadside for several seconds.',
      'Leaving high beam on when facing other vehicles: you dazzle oncoming road users and raise the risk for everyone.',
      'Carrying on while very sleepy: fatigue slows your reactions, just like other forms of distraction.'
    ],
    checklist: [
      'Front and rear lights on and working.',
      'Reflective vest or strips on, for rider and passenger.',
      'Light-coloured clothing when possible.',
      'Clear, clean visor; no tinted visor at night.',
      'A speed that lets you stop within what your lights show.',
      'Facing high beams: slow down and look to the right-hand edge.',
      'Expect pedestrians and animals on dark roads.',
      'If you feel sleepy, stop somewhere safe.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-moto-reflectivo', text: 'Since the March 2026 reform (Decreto 22-2026), motorcycle riders and passengers must wear a reflective vest or reflective marking between 6:00 p.m. and 6:00 a.m.' },
      { kind: 'expert', text: 'WHO includes motorcycle visibility among the measures to reduce crashes: lights on and high-visibility clothing or gear help other drivers detect riders in time.' },
      { kind: 'practical', text: 'Always keep a reflective vest on your motorcycle or in your car. If you have to walk or stop at the roadside at night, put it on before you get off.' }
    ],
    check: [
      {
        q: 'You are riding at night. Which visor is right?',
        options: [
          'A tinted visor, so you don’t get dazzled.',
          'A clear, clean visor.',
          'None: it’s better to lift the visor to see more.'
        ],
        answer: 1,
        explain: 'At night you need all the light you can get. A dark visor reduces visibility, and a dirty or scratched one scatters headlight glare.'
      },
      {
        q: 'An oncoming car has its high beam on and dazzles you. What do you do?',
        options: [
          'Slow down and move your eyes to the right-hand edge of your lane.',
          'Switch on your own high beam so they dip theirs.',
          'Stare at their lights to judge the distance.'
        ],
        answer: 0,
        explain: 'Looking into the lights leaves you unable to see for several seconds. Slowing down and following the edge keeps your reference without being blinded.'
      },
      {
        q: 'What is the key speed rule at night?',
        options: [
          'The same speed as in daytime if the road is empty.',
          'Go fast so you spend less time in the dark.',
          'Be able to stop within the stretch your lights illuminate.'
        ],
        answer: 2,
        explain: 'Your stopping distance doesn’t shrink at night, but what you can see does. If you can’t stop within what you can see, you are going too fast.'
      }
    ],
    diagramCaption: 'At night, a person in dark clothing becomes visible much later than one in light clothing, and someone wearing reflective gear can be seen from much further away. Your speed must let you stop within what your lights illuminate.'
  }
};

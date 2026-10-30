export default {
  id: 'moto-load-balance',
  category: 'moto',
  order: 5,
  minutes: 7,
  diagram: 'passenger-load',
  related: ['moto-passengers', 'moto-braking', 'pre-trip-check'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners (en inglés), 2017',
      labelEn: 'World Health Organization (WHO), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners, 2017' }
  ],
  es: {
    slug: 'equilibrio-y-carga-en-moto',
    title: 'Equilibrio y carga: cómo el peso cambia tu moto',
    dek: 'Cada pasajero, saco o caja cambia la forma en que tu moto frena, gira y se sostiene. Entender por qué te ayuda a llevar lo que necesitas sin perder el control.',
    objectives: [
      'Entender qué es el centro de gravedad y cómo lo mueve la carga.',
      'Saber cómo el peso extra afecta el frenado, la dirección, las llantas y la suspensión.',
      'Aprender a llevar carga de forma segura: baja, centrada, amarrada y dentro del límite.',
      'Reconocer las formas de cargar que más ponen en riesgo el control.'
    ],
    sections: [
      {
        heading: 'El centro de gravedad',
        paragraphs: [
          'Toda moto tiene un punto de equilibrio, el centro de gravedad: el lugar donde se concentra su peso. Cuando vas solo, ese punto queda bajo y entre las dos ruedas, y la moto está diseñada para comportarse bien así.',
          'Cuando agregas peso, ese punto se mueve. Un pasajero lo sube y lo lleva hacia atrás. Un saco en el asiento trasero, igual. Una caja amarrada alta, encima de la parrilla, lo sube todavía más. Y una carga que cuelga de un solo lado lo saca del centro. Cuanto más alto y más lejos del centro queda el peso, más fácil es que la moto se incline sola, más esfuerzo necesitas para enderezarla y más difícil es sostenerla al detenerte.'
        ]
      },
      {
        heading: 'Lo que cambia con el peso extra',
        paragraphs: [
          'La moto que conoces de memoria no es la misma cuando va cargada. Estos son los cambios que debes esperar:'
        ],
        list: [
          '<strong>Frenado</strong>: más peso significa más energía que los frenos tienen que detener. La moto necesita más distancia para pararse, sobre todo en bajada. Deja más espacio con el vehículo de adelante y empieza a frenar antes.',
          '<strong>Dirección</strong>: con mucho peso atrás, la llanta delantera queda más liviana y la dirección se siente menos precisa. En curvas, la moto responde más lento y tiende a abrirse.',
          '<strong>Aceleración</strong>: la moto sale más lenta. Calcula esto al incorporarte a una carretera o al rebasar: necesitas un espacio más largo.',
          '<strong>Llantas</strong>: cada llanta soporta un peso máximo. El manual de tu moto indica la carga máxima total y, muchas veces, una presión de aire distinta para cuando vas con pasajero o carga. Una llanta baja de aire y con mucho peso se calienta, se deforma y agarra peor.',
          '<strong>Suspensión</strong>: los amortiguadores se hunden más. En un hoyo o un túmulo pueden llegar al tope, y la moto rebota o pierde contacto con el suelo. Si tu moto tiene ajuste de precarga atrás, el manual explica cómo usarlo.',
          '<strong>En un choque</strong>: más masa en movimiento significa más energía en el impacto. Una carga mal amarrada se convierte en un objeto que puede golpearte a ti, a tu pasajero o a otros.'
        ]
      },
      {
        heading: 'Cómo llevar carga de forma segura',
        paragraphs: [
          'Muchas personas usan la moto para trabajar, hacer compras o llevar materiales. Se puede hacer con más seguridad si sigues unos principios sencillos.'
        ],
        list: [
          '<strong>Baja y centrada</strong>: pon el peso lo más bajo y lo más cerca del centro de la moto que puedas. Lo pesado, abajo; lo liviano, arriba.',
          '<strong>Bien amarrada</strong>: usa una parrilla, una caja o alforjas firmes, y amarra con correas o pulpos en buen estado. Antes de salir, empuja la carga con la mano: no debe moverse.',
          '<strong>Dentro del límite</strong>: respeta la carga máxima que indica el fabricante, sumando a las personas y todo lo que llevas. Si no sabes cuánto es, revisa el manual o pregunta en un taller.',
          '<strong>Sin colgar de los lados</strong>: una carga que sobresale ensancha la moto, se engancha en carros, postes o personas, y desequilibra hacia un lado.',
          '<strong>Nada en el timón ni en la mano</strong>: bolsas colgadas del timón se balancean y pueden trabar la dirección o los frenos. Llevar algo grande en una mano te deja con una sola mano para manejar, frenar y usar el clutch.',
          '<strong>Luces y placa visibles</strong>: la carga no debe tapar la luz trasera, las direccionales ni la placa, ni tu vista hacia los espejos.',
          '<strong>Nada suelto</strong>: correas, cuerdas o bolsas que cuelgan pueden enredarse en la rueda o la cadena.'
        ]
      },
      {
        heading: 'Cuando la carga no cabe',
        paragraphs: [
          'Hay cosas que simplemente no caben en una moto con seguridad: un tablero largo, un tanque grande de agua, varios sacos de cemento a la vez, un mueble. Intentarlo pone en riesgo el control y a las personas que van alrededor.',
          'En esos casos, divide la carga en varios viajes, pide que te la lleven en pick-up o en un vehículo de carga, o usa el servicio de entrega de la ferretería o del negocio. Un viaje extra cuesta tiempo; una caída cuesta mucho más.'
        ]
      }
    ],
    example: {
      title: 'Imagina esto',
      body: [
        'Imagina a una señora que regresa del mercado en moto con su compra de la semana. La primera vez colgó dos bolsas pesadas del timón y amarró una caja de refrescos alta sobre la parrilla. En la primera curva sintió que la moto quería irse hacia un lado, y al frenar en una bajada la moto tardó mucho en detenerse.',
        'Ahora lo hace distinto: lleva la compra en una caja firme amarrada baja sobre la parrilla, con lo más pesado abajo, y una mochila a la espalda para lo liviano. Nada cuelga del timón. Revisó en el manual cuánta carga aguanta la moto y la presión de las llantas, y en el camino de regreso empieza a frenar antes y toma las curvas más despacio.'
      ]
    },
    mistakes: [
      'Colgar bolsas del timón: se balancean, cambian la dirección y pueden trabar los frenos.',
      'Llevar algo grande en una mano: te deja sin poder frenar ni controlar la moto con las dos manos.',
      'Amarrar la carga alta o que sobresale de los lados: sube y desvía el centro de gravedad y la moto se vuelve inestable.',
      'Frenar a la misma distancia de siempre con la moto cargada: la moto necesita más espacio para detenerse.',
      'Llevar las llantas bajas de aire con mucho peso: se calientan, se deforman y agarran peor.',
      'Superar la carga máxima del fabricante: los frenos, las llantas y la suspensión no están hechos para ese peso.'
    ],
    checklist: [
      'Conoce la carga máxima de tu moto según el manual.',
      'Revisa la presión de las llantas para el peso que llevas.',
      'Carga baja, centrada y bien amarrada.',
      'Nada colgando del timón ni de los lados.',
      'Las dos manos siempre en el timón.',
      'Luz trasera, direccionales y placa visibles.',
      'Deja más distancia y empieza a frenar antes cuando vas cargado.',
      'Si no cabe con seguridad, haz otro viaje o busca otro transporte.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-moto-dos-personas', text: 'La Ley de Tránsito (Art. 99, num. 21, según se ha reportado) establece como infracción llevar más de dos personas en una motocicleta.' },
      { kind: 'expert', text: 'Los manuales de los fabricantes indican la carga máxima de la moto y, a menudo, la presión de llantas recomendada para viajar con pasajero o carga. Consulta el de tu modelo.' },
      { kind: 'practical', text: 'Después de cargar, da una vuelta corta y despacio en un lugar tranquilo para sentir cómo responde la moto antes de salir a la carretera.' }
    ],
    check: [
      {
        q: '¿Dónde conviene poner la carga más pesada?',
        options: [
          'Arriba de todo, para que no se aplaste',
          'Colgando de un lado, para que sea fácil sacarla',
          'Lo más baja y centrada posible'
        ],
        answer: 2,
        explain: 'El peso bajo y centrado mueve menos el centro de gravedad, y así la moto se mantiene más estable al frenar y al girar.'
      },
      {
        q: 'Vas con pasajero y carga. ¿Qué pasa con tu distancia de frenado?',
        options: [
          'Se acorta, porque el peso pega más la moto al suelo',
          'Se alarga, porque hay más energía que detener',
          'No cambia'
        ],
        answer: 1,
        explain: 'Más peso es más energía en movimiento. Los frenos necesitan más distancia para detener la moto, sobre todo en bajada.'
      },
      {
        q: 'Necesitas llevar una caja grande a casa. ¿Qué es lo más seguro?',
        options: [
          'Amarrarla firme y baja en la parrilla si cabe dentro del límite, o si no, hacer otro viaje o pedir que la lleven',
          'Llevarla en una mano y manejar con la otra',
          'Colgarla del timón con una cuerda'
        ],
        answer: 0,
        explain: 'Necesitas las dos manos para frenar, usar el clutch y controlar la moto. La carga va amarrada y baja; si no cabe con seguridad, se busca otra forma de llevarla.'
      }
    ],
    diagramCaption: 'El peso del pasajero y de la carga sube y mueve hacia atrás el centro de gravedad. Lleva la carga baja, centrada y amarrada.'
  },
  en: {
    slug: 'motorcycle-load-and-balance',
    title: 'Load and balance: how weight changes your bike',
    dek: 'Every passenger, sack or box changes how your motorcycle brakes, turns and stays upright. Understanding why helps you carry what you need without losing control.',
    objectives: [
      'Understand what the centre of gravity is and how a load moves it.',
      'Know how extra weight affects braking, steering, tyres and suspension.',
      'Learn to carry loads safely: low, centred, secured and within the limit.',
      'Recognise the ways of carrying things that most put control at risk.'
    ],
    sections: [
      {
        heading: 'The centre of gravity',
        paragraphs: [
          'Every motorcycle has a balance point, its centre of gravity: the place where its weight is concentrated. When you ride alone, that point sits low and between the two wheels, and the bike is designed to handle well that way.',
          'When you add weight, that point moves. A passenger raises it and moves it back. A sack on the back of the seat does the same. A box strapped high on the rack raises it further still. And a load hanging off one side pulls it off centre. The higher and further from the centre the weight sits, the more easily the bike leans on its own, the more effort you need to bring it upright, and the harder it is to hold up when you stop.'
        ]
      },
      {
        heading: 'What changes with extra weight',
        paragraphs: [
          'The bike you know by heart is not the same bike when it is loaded. These are the changes to expect:'
        ],
        list: [
          '<strong>Braking</strong>: more weight means more energy for the brakes to stop. The bike needs more distance to stop, especially downhill. Leave more space to the vehicle ahead and start braking earlier.',
          '<strong>Steering</strong>: with a lot of weight at the back, the front tyre becomes lighter and the steering feels less precise. On bends, the bike responds more slowly and tends to run wide.',
          '<strong>Acceleration</strong>: the bike pulls away more slowly. Allow for this when joining a road or overtaking: you need a longer gap.',
          '<strong>Tyres</strong>: each tyre has a maximum load. Your owner’s manual gives the maximum total load and often a different air pressure for riding with a passenger or cargo. An under-inflated tyre carrying a lot of weight heats up, deforms and grips less well.',
          '<strong>Suspension</strong>: the shock absorbers compress further. On a pothole or speed bump they can bottom out, and the bike bounces or loses contact with the road. If your bike has rear preload adjustment, the manual explains how to use it.',
          '<strong>In a crash</strong>: more mass in motion means more energy in the impact. A badly secured load becomes an object that can strike you, your passenger or others.'
        ]
      },
      {
        heading: 'How to carry a load safely',
        paragraphs: [
          'Many people use their motorcycle for work, shopping or carrying materials. It can be done more safely if you follow a few simple principles.'
        ],
        list: [
          '<strong>Low and centred</strong>: put the weight as low and as close to the middle of the bike as you can. Heavy items at the bottom, light ones on top.',
          '<strong>Well secured</strong>: use a rack, a top box or sturdy panniers, and tie down with straps or bungee cords in good condition. Before setting off, push the load with your hand: it should not move.',
          '<strong>Within the limit</strong>: respect the manufacturer’s maximum load, counting the people and everything you carry. If you do not know what it is, check the manual or ask at a workshop.',
          '<strong>Nothing hanging off the sides</strong>: a load that sticks out makes the bike wider, catches on cars, posts or people, and pulls the bike to one side.',
          '<strong>Nothing on the handlebar or in your hand</strong>: bags hung from the handlebar swing and can jam the steering or brakes. Carrying something large in one hand leaves you with one hand to steer, brake and work the clutch.',
          '<strong>Lights and plate visible</strong>: the load must not cover the rear light, indicators or number plate, or block your view in the mirrors.',
          '<strong>Nothing loose</strong>: straps, ropes or bags that dangle can get caught in the wheel or chain.'
        ]
      },
      {
        heading: 'When the load does not fit',
        paragraphs: [
          'Some things simply do not fit safely on a motorcycle: a long plank, a large water tank, several bags of cement at once, a piece of furniture. Trying to carry them puts control at risk, and the people around you.',
          'In those cases, split the load into several trips, ask someone with a pick-up or a delivery vehicle to take it, or use the delivery service of the hardware store or shop. An extra trip costs time; a fall costs far more.'
        ]
      }
    ],
    example: {
      title: 'Picture this',
      body: [
        'Picture a woman coming home from the market on her motorcycle with the week’s shopping. The first time, she hung two heavy bags from the handlebar and strapped a crate of drinks high on the rack. On the first bend she felt the bike wanting to pull to one side, and when she braked going downhill the bike took a long time to stop.',
        'Now she does it differently: she carries the shopping in a sturdy box strapped low on the rack, with the heaviest things at the bottom, and a backpack for the lighter items. Nothing hangs from the handlebar. She checked the manual for how much weight the bike can carry and the right tyre pressure, and on the way home she starts braking earlier and takes bends more slowly.'
      ]
    },
    mistakes: [
      'Hanging bags from the handlebar: they swing, affect the steering and can jam the brakes.',
      'Carrying something large in one hand: it leaves you unable to brake and control the bike with both hands.',
      'Strapping a load high or sticking out to the sides: it raises and shifts the centre of gravity and makes the bike unstable.',
      'Braking at your usual distance with a loaded bike: it needs more space to stop.',
      'Riding on under-inflated tyres with a heavy load: they heat up, deform and grip less well.',
      'Going over the manufacturer’s maximum load: the brakes, tyres and suspension are not built for that weight.'
    ],
    checklist: [
      'Know your bike’s maximum load from the manual.',
      'Check the tyre pressure for the weight you are carrying.',
      'Keep the load low, centred and well secured.',
      'Nothing hanging from the handlebar or off the sides.',
      'Both hands on the handlebar at all times.',
      'Rear light, indicators and number plate visible.',
      'Leave more distance and start braking earlier when loaded.',
      'If it does not fit safely, make another trip or find other transport.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-moto-dos-personas', text: 'The Ley de Tránsito (Art. 99, num. 21, as reported) makes it an infraction to carry more than two people on a motorcycle.' },
      { kind: 'expert', text: 'Manufacturers’ manuals give the motorcycle’s maximum load and often the recommended tyre pressure for riding with a passenger or cargo. Check the one for your model.' },
      { kind: 'practical', text: 'After loading up, ride a short, slow loop somewhere quiet to feel how the bike responds before heading out on the road.' }
    ],
    check: [
      {
        q: 'Where is the best place to put the heaviest part of a load?',
        options: [
          'Right on top, so it does not get squashed',
          'Hanging off one side, so it is easy to take off',
          'As low and as centred as possible'
        ],
        answer: 2,
        explain: 'Low, centred weight moves the centre of gravity less, so the bike stays more stable when braking and turning.'
      },
      {
        q: 'You are riding with a passenger and a load. What happens to your braking distance?',
        options: [
          'It gets shorter, because the weight presses the bike onto the road',
          'It gets longer, because there is more energy to stop',
          'It does not change'
        ],
        answer: 1,
        explain: 'More weight means more energy in motion. The brakes need more distance to stop the bike, especially downhill.'
      },
      {
        q: 'You need to take a large box home. What is the safest option?',
        options: [
          'Strap it firmly and low on the rack if it fits within the limit; if not, make another trip or have it delivered',
          'Carry it in one hand and ride with the other',
          'Hang it from the handlebar with a rope'
        ],
        answer: 0,
        explain: 'You need both hands to brake, work the clutch and control the bike. A load goes strapped down and low; if it does not fit safely, find another way to carry it.'
      }
    ],
    diagramCaption: 'The weight of a passenger and cargo raises the centre of gravity and moves it back. Carry loads low, centred and secured.'
  }
};

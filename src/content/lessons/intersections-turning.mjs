export default {
  id: 'intersections-turning',
  category: 'intersecciones',
  order: 1,
  minutes: 8,
  diagram: 'intersection-turn',
  related: ['blind-spots', 'watch-for-motorcycles', 'road-markings', 'pedestrian-safety'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners (en inglés), 2017',
      labelEn: 'World Health Organization (WHO), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners, 2017' },
    { label: 'Organización Mundial de la Salud (OMS), Informe sobre la situación mundial de la seguridad vial 2023',
      labelEn: 'World Health Organization (WHO), Global status report on road safety 2023' }
  ],
  es: {
    slug: 'intersecciones-y-giros',
    title: 'Intersecciones y vehículos que giran',
    dek: 'En los cruces se juntan carros, motos, buses y peatones que van en direcciones distintas. Aprende a leer las señales, a mirar bien y a girar sin poner a nadie en peligro.',
    objectives: [
      'Entender por qué las intersecciones son lugares de alto riesgo.',
      'Saber qué significan las señales de ALTO y CEDA EL PASO.',
      'Aplicar una forma ordenada de mirar antes de cruzar o girar.',
      'Girar con seguridad, pendiente de motos y peatones.'
    ],
    sections: [
      {
        heading: 'Por qué los cruces son peligrosos',
        paragraphs: [
          'En una intersección se cruzan trayectorias. Alguien sigue recto, alguien gira a la izquierda, alguien sale de una calle lateral y alguien cruza a pie. Cada uno toma decisiones en pocos segundos, muchas veces con la vista tapada por un bus parado, un muro, un árbol o un carro estacionado en la esquina.',
          'Los choques en cruces suelen ser de lado o de frente en ángulo, donde el cuerpo queda poco protegido, sobre todo en una moto. Por eso conviene llegar a cualquier cruce con la velocidad baja y la atención alta, aunque creas que tienes el paso.',
          'En la isla, muchos cruces no son solo esquinas con semáforo. Una entrada a un negocio, un callejón, la salida de un parqueo o una parada donde se detiene un mototaxi funcionan como pequeñas intersecciones: alguien puede entrar o salir sin aviso. Trátalas con la misma atención que un cruce grande.'
        ]
      },
      {
        heading: 'El giro a la izquierda y la moto que “no se vio”',
        paragraphs: [
          'Una de las situaciones más peligrosas es la de un carro que gira a la izquierda y cruza delante de una moto que viene de frente. El conductor mira, no ve nada que le preocupe y gira. La moto estaba ahí. Los especialistas en seguridad vial llaman a esto “miró pero no vio”: el conductor buscaba carros, la moto es pequeña, y es difícil calcular a qué velocidad viene algo tan angosto.',
          'Si vas a girar a la izquierda, mira dos veces el carril contrario, busca específicamente motos y bicicletas, y si no estás seguro de la distancia, espera. Si vas en moto y ves un carro esperando para girar, asume que puede no haberte visto: baja la velocidad, cubre el freno y prepárate para detenerte.'
        ]
      },
      {
        heading: 'ALTO y CEDA EL PASO',
        paragraphs: [
          'Las señales le indican a cada conductor quién debe esperar. Respetarlas es la base del orden en un cruce.'
        ],
        list: [
          '<strong>ALTO</strong> (octágono rojo): detente por completo, en la línea de alto si la hay o antes del paso peatonal. Mira en todas las direcciones y avanza solo cuando el camino esté libre.',
          '<strong>CEDA EL PASO</strong> (triángulo con la punta hacia abajo): baja la velocidad y prepárate para detenerte. Deja pasar a los vehículos y peatones que vienen por la otra vía; avanza solo si no obligas a nadie a frenar.',
          'Donde no hay señales, avanza con mucha precaución, a baja velocidad, y nunca des por hecho que el otro te va a ceder el paso.'
        ]
      },
      {
        heading: 'Cómo mirar y cómo colocarte',
        paragraphs: [
          'Antes de cruzar o salir a una vía, usa un orden sencillo: <strong>izquierda, derecha y otra vez izquierda</strong>. El tráfico que viene de la izquierda es el que llega primero a tu carril, por eso se revisa dos veces. Mueve la cabeza para mirar alrededor del poste delantero del carro.',
          'Al acercarte a un cruce donde alguien podría salir, levanta el pie del acelerador y ponlo sobre el freno sin presionar. A esto se le llama <strong>cubrir el freno</strong>, y te ahorra una fracción de segundo valiosa si tienes que detenerte. Colócate en tu carril de manera que te vean: en moto, evita quedar escondido detrás de un vehículo grande. Y la regla de oro: <strong>nunca des por hecho que te vieron</strong>. Que un conductor mire hacia ti no significa que te haya visto.'
        ]
      },
      {
        heading: 'Girar con seguridad',
        paragraphs: [
          'Cuando eres tú quien gira, la responsabilidad de no cruzarte en el camino de nadie es tuya.'
        ],
        list: [
          'Pon la direccional con tiempo, antes de empezar a frenar, para que los demás entiendan lo que vas a hacer.',
          'Revisa espejos y punto ciego: una moto puede venir a la par o rebasándote por el lado del giro.',
          'Baja la velocidad antes del giro, no durante.',
          'Cede el paso a los peatones que están cruzando la calle hacia donde vas a girar.',
          'Gira a una velocidad que te permita detenerte si aparece alguien.',
          'En vehículos grandes, recuerda que las ruedas traseras cortan la curva: abre el giro lo necesario y revisa el lado de adentro.'
        ]
      }
    ],
    example: {
      title: 'Imagina: un cruce cerca del mercado',
      body: [
        'Imagina que vas en carro y quieres girar a la izquierda en un cruce. Frente a ti hay un pick-up también esperando para girar, que te tapa parte del carril contrario. Ves un hueco y te dan ganas de aprovecharlo.',
        'En lugar de eso, esperas hasta ver bien el carril completo. Justo en ese momento aparece una moto que venía detrás del pick-up, escondida. Como esperaste, la moto pasa sin problema. Después miras izquierda, derecha e izquierda, revisas que no haya nadie cruzando a pie y giras despacio.'
      ]
    },
    mistakes: [
      'Girar a la izquierda calculando a ojo la velocidad de una moto, porque es muy difícil juzgarla bien.',
      'Detenerse a medias en un ALTO, porque no te da tiempo de mirar bien en todas direcciones.',
      'Pensar que el otro te cede el paso solo porque te miró, porque mirar no es lo mismo que ver.',
      'Poner la direccional ya girando, porque los demás no tienen tiempo de reaccionar.',
      'Olvidar a los peatones al girar, porque están cruzando justo hacia donde vas.',
      'Llegar rápido a un cruce “porque tienes la vía”, porque si alguien se equivoca no te da tiempo de frenar.'
    ],
    checklist: [
      'Llega a cada cruce con velocidad baja.',
      'En ALTO, detente por completo.',
      'En CEDA EL PASO, deja pasar antes de avanzar.',
      'Mira izquierda, derecha e izquierda otra vez.',
      'Busca motos de forma específica, y mira dos veces.',
      'Cubre el freno cuando alguien podría salir.',
      'Pon la direccional antes de frenar para girar.',
      'Cede el paso a los peatones al girar.'
    ],
    notes: [
      { kind: 'expert', text: 'Los manuales de seguridad vial de la OMS sobre motocicletas describen el choque entre un carro que gira y una moto que viene de frente como un tipo de choque frecuente, y recomiendan mejorar la visibilidad de las motos y la atención de los conductores en los cruces.' },
      { kind: 'practical', text: 'Si vas en moto y ves un carro esperando para girar o salir de una calle lateral, actúa como si no te hubiera visto: baja la velocidad y deja espacio para frenar.' }
    ],
    check: [
      {
        q: '¿Qué te pide una señal de ALTO?',
        options: [
          'Bajar la velocidad y seguir si no viene nadie cerca.',
          'Detenerte por completo, mirar en todas direcciones y avanzar solo con el camino libre.',
          'Detenerte solo si hay un agente de tránsito.'
        ],
        answer: 1,
        explain: 'ALTO significa detención completa. Así tienes tiempo de mirar bien antes de avanzar.'
      },
      {
        q: 'Vas en moto y un carro espera para girar a la izquierda frente a ti. El conductor mira en tu dirección. ¿Qué haces?',
        options: [
          'Sigues igual; ya te vio.',
          'Aceleras para pasar antes de que gire.',
          'Bajas la velocidad, cubres el freno y te preparas para detenerte.'
        ],
        answer: 2,
        explain: 'Que te mire no significa que te haya visto. Prepararte para frenar te da margen si gira delante de ti.'
      },
      {
        q: 'Antes de salir a una vía, ¿en qué orden conviene mirar?',
        options: [
          'Izquierda, derecha y otra vez izquierda.',
          'Solo hacia donde vas a girar.',
          'Derecha y luego adelante.'
        ],
        answer: 0,
        explain: 'El tráfico de la izquierda es el que llega primero a tu carril, por eso se revisa al principio y otra vez justo antes de avanzar.'
      }
    ],
    diagramCaption: 'Un carro que gira a la izquierda debe esperar a que el carril contrario esté libre, incluida la moto que puede venir oculta detrás de otro vehículo.'
  },
  en: {
    slug: 'intersections-and-turning',
    title: 'Intersections and turning vehicles',
    dek: 'At junctions, cars, motorcycles, buses and pedestrians heading in different directions all meet. Learn to read the signs, look properly and turn without putting anyone at risk.',
    objectives: [
      'Understand why intersections are high-risk places.',
      'Know what STOP (ALTO) and GIVE WAY (CEDA EL PASO) signs mean.',
      'Use an orderly way of looking before crossing or turning.',
      'Turn safely, watching out for motorcycles and pedestrians.'
    ],
    sections: [
      {
        heading: 'Why junctions are dangerous',
        paragraphs: [
          'At an intersection, paths cross. Someone goes straight on, someone turns left, someone pulls out of a side road and someone crosses on foot. Each of them makes decisions in a few seconds, often with their view blocked by a stopped bus, a wall, a tree or a car parked on the corner.',
          'Crashes at junctions are often side impacts or angled head-on impacts, where the body has little protection, especially on a motorcycle. That is why it pays to arrive at any junction with low speed and high attention, even when you think you have the right of way.',
          'On the island, many junctions are not just corners with traffic lights. The entrance to a business, a side lane, the exit from a car park or a spot where a mototaxi stops for passengers all work like small intersections: someone may pull in or out without warning. Treat them with the same attention as a major junction.'
        ]
      },
      {
        heading: 'The left turn and the motorcycle “nobody saw”',
        paragraphs: [
          'One of the most dangerous situations is a car turning left across the path of an oncoming motorcycle. The driver looks, sees nothing that worries them and turns. The motorcycle was there. Road-safety specialists call this “looked but did not see”: the driver was looking for cars, the motorcycle is small, and it is hard to judge how fast something so narrow is approaching.',
          'If you are turning left, look twice at the oncoming lane, search specifically for motorcycles and bicycles, and if you are unsure of the distance, wait. If you are riding and you see a car waiting to turn, assume it may not have seen you: slow down, cover your brake and be ready to stop.'
        ]
      },
      {
        heading: 'ALTO and CEDA EL PASO',
        paragraphs: [
          'Signs tell each driver who must wait. Respecting them is the basis of order at a junction.'
        ],
        list: [
          '<strong>ALTO (STOP)</strong>, a red octagon: come to a complete stop, at the stop line if there is one or before the crossing. Look in every direction and go only when the way is clear.',
          '<strong>CEDA EL PASO (GIVE WAY)</strong>, a downward-pointing triangle: slow down and be ready to stop. Let vehicles and pedestrians on the other road go first; go only if you will not force anyone to brake.',
          'Where there are no signs, proceed with great care at low speed, and never assume the other driver will give way to you.'
        ]
      },
      {
        heading: 'How to look and where to position yourself',
        paragraphs: [
          'Before crossing or pulling out, use a simple order: <strong>left, right, then left again</strong>. Traffic from the left reaches your lane first, so you check it twice. Move your head to look around the car’s front pillar.',
          'When approaching a junction where someone could pull out, lift your foot off the accelerator and rest it over the brake without pressing. This is called <strong>covering the brake</strong>, and it saves you a valuable fraction of a second if you have to stop. Position yourself in your lane where you can be seen: on a motorcycle, avoid being hidden behind a large vehicle. And the golden rule: <strong>never assume you have been seen</strong>. A driver looking towards you does not mean they have seen you.'
        ]
      },
      {
        heading: 'Turning safely',
        paragraphs: [
          'When you are the one turning, it is your responsibility not to cut across anyone’s path.'
        ],
        list: [
          'Signal early, before you start braking, so others understand what you are about to do.',
          'Check mirrors and blind spot: a motorcycle may be alongside or passing you on the side you are turning towards.',
          'Slow down before the turn, not during it.',
          'Give way to pedestrians crossing the road you are turning into.',
          'Turn at a speed that lets you stop if someone appears.',
          'In large vehicles, remember the rear wheels cut the corner: swing as wide as needed and check the inside.'
        ]
      }
    ],
    example: {
      title: 'Picture this: a junction near the market',
      body: [
        'Picture yourself driving and wanting to turn left at a junction. Opposite you is a pick-up, also waiting to turn, blocking part of the oncoming lane. You see a gap and feel tempted to take it.',
        'Instead, you wait until you can see the whole lane. Just then a motorcycle that was hidden behind the pick-up comes through. Because you waited, it passes safely. Then you look left, right and left again, check nobody is crossing on foot, and turn slowly.'
      ]
    },
    mistakes: [
      'Turning left by guessing a motorcycle’s speed, because it is very hard to judge accurately.',
      'Rolling through a STOP sign, because it does not give you time to look properly in every direction.',
      'Assuming the other driver will give way just because they looked at you, because looking is not the same as seeing.',
      'Signalling while already turning, because others have no time to react.',
      'Forgetting pedestrians when turning, because they are crossing exactly where you are heading.',
      'Arriving fast at a junction “because it is your road”, because if someone else makes a mistake you will not have time to stop.'
    ],
    checklist: [
      'Approach every junction at low speed.',
      'At ALTO, stop completely.',
      'At CEDA EL PASO, let others pass before you go.',
      'Look left, right and left again.',
      'Search specifically for motorcycles, and look twice.',
      'Cover the brake where someone could pull out.',
      'Signal before braking to turn.',
      'Give way to pedestrians when turning.'
    ],
    notes: [
      { kind: 'expert', text: 'WHO road-safety manuals on motorcycles describe crashes between a turning car and an oncoming motorcycle as a common crash type, and recommend improving motorcycle visibility and driver attention at junctions.' },
      { kind: 'practical', text: 'If you are riding and you see a car waiting to turn or pull out of a side road, act as if it has not seen you: slow down and leave room to brake.' }
    ],
    check: [
      {
        q: 'What does an ALTO (STOP) sign require?',
        options: [
          'Slow down and carry on if nobody is close.',
          'Stop completely, look in every direction and go only when the way is clear.',
          'Stop only if a traffic officer is present.'
        ],
        answer: 1,
        explain: 'ALTO means a complete stop. That gives you time to look properly before you go.'
      },
      {
        q: 'You are riding and a car is waiting to turn left in front of you. The driver looks your way. What do you do?',
        options: [
          'Carry on as normal; they have seen you.',
          'Speed up to get past before they turn.',
          'Slow down, cover your brake and be ready to stop.'
        ],
        answer: 2,
        explain: 'Looking at you does not mean they have seen you. Being ready to brake gives you a margin if they turn in front of you.'
      },
      {
        q: 'Before pulling out onto a road, in what order should you look?',
        options: [
          'Left, right, then left again.',
          'Only in the direction you are turning.',
          'Right, then straight ahead.'
        ],
        answer: 0,
        explain: 'Traffic from the left reaches your lane first, so you check it at the start and again just before you go.'
      }
    ],
    diagramCaption: 'A car turning left must wait until the oncoming lane is clear, including a motorcycle that may be hidden behind another vehicle.'
  }
};

export default {
  id: 'road-markings',
  category: 'normas',
  order: 1,
  minutes: 7,
  diagram: 'lane-lines',
  related: ['safe-overtaking', 'intersections-turning', 'pedestrian-safety'],
  sources: [
    { label: 'Secretaría de Integración Económica Centroamericana (SIECA), Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito',
      labelEn: 'Secretariat for Central American Economic Integration (SIECA), Central American Manual on Uniform Traffic Control Devices (Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito)' }
  ],
  es: {
    slug: 'leer-las-marcas-de-la-via',
    title: 'Cómo leer las marcas de la vía',
    dek: 'Las líneas y símbolos pintados en la carretera te dicen dónde puedes rebasar, dónde detenerte y por dónde cruzan los peatones. Aprende a leerlos, y qué hacer cuando están borrados.',
    objectives: [
      'Distinguir una línea continua de una discontinua y saber qué permite cada una.',
      'Reconocer líneas dobles, líneas de borde, líneas de alto y pasos peatonales.',
      'Entender los principios generales del uso de líneas amarillas y blancas en Centroamérica.',
      'Saber qué hacer cuando las marcas están borradas o no existen.'
    ],
    sections: [
      {
        heading: 'Un idioma común para la región',
        paragraphs: [
          'Honduras, como los demás países centroamericanos, usa como referencia el <em>Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito</em>, preparado por la SIECA. Su objetivo es que las señales y marcas se vean y signifiquen lo mismo en toda la región. Esta lección explica los principios generales; no reemplaza el manual ni un curso oficial.',
          'Las marcas en el pavimento trabajan junto con las señales verticales (los rótulos). Cuando una señal y una marca indican lo mismo, se refuerzan. Cuando ves una señal clara, como un ALTO o un “No rebasar”, obedécela aunque la pintura del suelo esté gastada.'
        ]
      },
      {
        heading: 'Líneas centrales: continua, discontinua y doble',
        paragraphs: [
          'La línea central separa los carriles. Su forma te dice si puedes cruzarla:'
        ],
        list: [
          '<strong>Línea discontinua</strong> (a trazos): puedes cruzarla para rebasar o girar, siempre que sea seguro y no venga nadie.',
          '<strong>Línea continua</strong>: no la cruces. Suele marcarse donde no hay visibilidad suficiente para rebasar, como curvas, cuestas o cerca de cruces.',
          '<strong>Doble línea continua</strong>: no la cruza nadie, en ningún sentido.',
          '<strong>Línea continua junto a una discontinua</strong>: manda la línea que está más cerca de ti. Si de tu lado está la discontinua, puedes rebasar con seguridad; si de tu lado está la continua, no.'
        ]
      },
      {
        heading: 'Amarillo y blanco',
        paragraphs: [
          'En el sistema centroamericano, como en gran parte del continente americano, el color de la línea también da información. En general, <strong>las líneas amarillas separan el tráfico que va en sentidos opuestos</strong>: si ves una línea central amarilla, del otro lado vienen vehículos de frente. <strong>Las líneas blancas separan carriles que van en el mismo sentido</strong> y también se usan para la línea de borde del lado derecho, las líneas de alto y los pasos peatonales.',
          'Este principio general te ayuda a orientarte, pero no todas las vías lo siguen perfectamente: hay tramos viejos, repintados o con marcas distintas. Ante la duda, compórtate como si pudiera venir alguien de frente.'
        ]
      },
      {
        heading: 'Borde, alto, pasos peatonales y flechas',
        paragraphs: [
          'Además de las líneas centrales, hay otras marcas que vale la pena conocer bien:'
        ],
        list: [
          '<strong>Línea de borde:</strong> marca la orilla de la parte por donde se circula. Te ayuda a mantenerte en tu carril, sobre todo de noche o con lluvia.',
          '<strong>Línea de alto:</strong> una franja blanca ancha atravesada en tu carril, normalmente junto a una señal de ALTO o un semáforo. Detente antes de ella.',
          '<strong>Paso peatonal o paso de cebra:</strong> franjas blancas anchas que cruzan la calle. Indican por dónde cruzan las personas a pie. Acércate despacio y dales el paso.',
          '<strong>Flechas en el carril:</strong> indican hacia dónde puedes seguir desde ese carril. Si tu carril tiene una flecha de giro, colócate en él con tiempo y no cambies de carril a última hora.',
          '<strong>Palabras pintadas</strong>, como ALTO o ESCUELA, que refuerzan una señal o advierten de un peligro cercano.',
          '<strong>Zonas con rayas diagonales:</strong> en algunos lugares verás áreas pintadas con franjas inclinadas, por ejemplo antes de una isleta o donde se separan dos carriles. Indican un espacio que no debe usarse para circular ni para estacionarse.'
        ]
      },
      {
        heading: 'Cuando las marcas están borradas o no existen',
        paragraphs: [
          'En muchos tramos las marcas se borran con el sol, la lluvia y el tráfico, y en calles de tierra o de barrio puede que nunca las haya habido. Eso no cambia la forma segura de manejar. Mantente en tu lado de la vía, no rebases donde no ves bien hacia adelante, reduce la velocidad en cruces y busca los peatones.',
          'Recuerda que las señales y marcas indican lo que se debe hacer, pero no garantizan que los demás lo hagan. Una línea continua no impide que otro rebase en curva. Léelas, respétalas y sigue atento.',
          'De noche y con lluvia, las marcas gastadas se ven todavía menos. En esas condiciones, baja la velocidad, usa la orilla de la vía y las luces de los demás vehículos como referencia, y deja más distancia. Si conoces un tramo donde la pintura ha desaparecido, recuérdalo y anticípate.'
        ]
      }
    ],
    example: {
      title: 'Imagina: una carretera con curvas y cuestas',
      body: [
        'Imagina que vas en moto por una carretera de la isla con curvas y cuestas. En el tramo recto la línea central es a trazos; antes de la curva cambia a continua. Más adelante hay dos líneas juntas: la continua de tu lado y la discontinua del lado contrario.',
        'Entiendes que en ese tramo tú no debes rebasar, pero quien viene en sentido contrario sí podría hacerlo con seguridad. Por eso mantienes tu posición, atento a que pueda aparecer alguien rebasando en tu dirección. Al llegar al pueblo, ves un paso de cebra con la pintura gastada y bajas la velocidad: sigue siendo un lugar donde cruzan personas.'
      ]
    },
    mistakes: [
      'Cruzar una línea continua para rebasar, porque suele estar donde no hay visibilidad suficiente.',
      'Pensar que si no hay línea se puede rebasar en cualquier lugar, porque la falta de pintura no cambia el peligro de una curva.',
      'Detenerse encima del paso peatonal, porque obliga a las personas a cruzar entre los carros.',
      'Cambiar de carril a última hora para girar, porque sorprende a quien viene detrás o a la par.',
      'Confiar en que los demás respetarán las líneas, porque no todos lo hacen.'
    ],
    checklist: [
      'Línea discontinua: puedes cruzar solo si es seguro.',
      'Línea continua: no la cruces.',
      'En líneas dobles, manda la que está de tu lado.',
      'Detente antes de la línea de alto.',
      'Acércate despacio a los pasos peatonales y da el paso.',
      'Colócate con tiempo en el carril de giro.',
      'Si las marcas están borradas, maneja como si estuvieran.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-ley-transito', text: 'El tránsito en Honduras se rige por la Ley de Tránsito (Decreto 205-2005) y sus reformas posteriores.' },
      { kind: 'expert', text: 'El Manual Centroamericano de la SIECA busca que las señales y marcas sean uniformes en la región. Cuando una señal vertical y una marca en el suelo parecen contradecirse, o la marca está borrada, guíate por la señal y por lo que ves de la vía.' },
      { kind: 'practical', text: 'Fíjate en las marcas de las rutas que usas cada día. Saber dónde está cada línea continua y cada paso peatonal te ayuda a anticiparte cuando la pintura se borra.' }
    ],
    check: [
      {
        q: 'Ves una línea continua y una discontinua juntas en el centro. La discontinua está de tu lado. ¿Qué significa?',
        options: [
          'Nadie puede rebasar.',
          'Solo pueden rebasar los que vienen de frente.',
          'Puedes rebasar si es seguro; quien viene en sentido contrario no.'
        ],
        answer: 2,
        explain: 'Manda la línea que está más cerca de ti. Si es discontinua, puedes cruzarla cuando sea seguro.'
      },
      {
        q: 'En general, en el sistema centroamericano, ¿qué indica una línea central amarilla?',
        options: [
          'Que del otro lado viene tráfico en sentido contrario.',
          'Que la vía es solo para buses.',
          'Que es una zona escolar.'
        ],
        answer: 0,
        explain: 'Por regla general, las líneas amarillas separan sentidos opuestos y las blancas separan carriles del mismo sentido. Aun así, no todas las vías siguen el principio al pie de la letra.'
      },
      {
        q: 'La línea central de una curva está tan borrada que no se ve. ¿Qué haces?',
        options: [
          'Rebasas, porque no hay línea que lo prohíba.',
          'No rebasas: la curva sigue sin dejarte ver lo que viene.',
          'Te pasas al centro para ver mejor.'
        ],
        answer: 1,
        explain: 'La falta de pintura no cambia el peligro. Decide por lo que ves de la vía y por las señales.'
      }
    ],
    diagramCaption: 'Líneas centrales discontinua, continua y doble, línea de borde, línea de alto y paso peatonal.'
  },
  en: {
    slug: 'reading-road-markings',
    title: 'Reading road markings',
    dek: 'The lines and symbols painted on the road tell you where you can overtake, where to stop and where pedestrians cross. Learn to read them, and what to do when they have faded.',
    objectives: [
      'Tell a solid line from a broken line and know what each allows.',
      'Recognise double lines, edge lines, stop lines and pedestrian crossings.',
      'Understand the general principles of yellow and white lines in Central America.',
      'Know what to do when markings are faded or missing.'
    ],
    sections: [
      {
        heading: 'A shared language for the region',
        paragraphs: [
          'Honduras, like the other Central American countries, uses as its reference the <em>Central American Manual on Uniform Traffic Control Devices</em> (<em>Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito</em>), prepared by SIECA. Its purpose is for signs and markings to look and mean the same across the region. This lesson explains the general principles; it does not replace the manual or an official course.',
          'Road markings work together with upright signs. When a sign and a marking say the same thing, they reinforce each other. When you see a clear sign, such as ALTO (STOP) or “No rebasar” (No overtaking), obey it even if the paint on the road has worn away.'
        ]
      },
      {
        heading: 'Centre lines: solid, broken and double',
        paragraphs: [
          'The centre line separates the lanes. Its pattern tells you whether you may cross it:'
        ],
        list: [
          '<strong>Broken line</strong> (dashed): you may cross it to overtake or turn, provided it is safe and nothing is coming.',
          '<strong>Solid line</strong>: do not cross it. It is usually marked where there is not enough visibility to overtake, such as bends, hills or near junctions.',
          '<strong>Double solid line</strong>: nobody crosses it, in either direction.',
          '<strong>Solid line beside a broken line</strong>: the line closest to you applies. If the broken line is on your side, you may overtake when safe; if the solid line is on your side, you may not.'
        ]
      },
      {
        heading: 'Yellow and white',
        paragraphs: [
          'In the Central American system, as across much of the Americas, the colour of the line also carries information. In general, <strong>yellow lines separate traffic travelling in opposite directions</strong>: if you see a yellow centre line, vehicles on the other side are coming towards you. <strong>White lines separate lanes travelling in the same direction</strong> and are also used for the right-hand edge line, stop lines and pedestrian crossings.',
          'This general principle helps you get your bearings, but not every road follows it perfectly: some stretches are old, repainted or marked differently. When in doubt, behave as if someone could be coming towards you.'
        ]
      },
      {
        heading: 'Edge lines, stop lines, crossings and arrows',
        paragraphs: [
          'Besides centre lines, there are other markings worth knowing well:'
        ],
        list: [
          '<strong>Edge line:</strong> marks the edge of the part of the road used for traffic. It helps you stay in your lane, especially at night or in rain.',
          '<strong>Stop line:</strong> a wide white bar across your lane, usually with an ALTO sign or traffic light. Stop before it.',
          '<strong>Pedestrian crossing or zebra crossing</strong> (<em>paso peatonal</em> or <em>paso de cebra</em>): wide white stripes across the road. They show where people on foot cross. Approach slowly and let them go first.',
          '<strong>Lane arrows:</strong> show which way you can go from that lane. If your lane has a turn arrow, move into it in good time and do not change lanes at the last moment.',
          '<strong>Painted words</strong>, such as ALTO or ESCUELA (school), which back up a sign or warn of a hazard ahead.',
          '<strong>Areas of diagonal stripes:</strong> in some places you will see areas painted with slanted stripes, for example before a traffic island or where two lanes split. They mark space that should not be used for driving or parking.'
        ]
      },
      {
        heading: 'When markings are faded or missing',
        paragraphs: [
          'On many stretches, markings wear away with sun, rain and traffic, and on dirt roads or neighbourhood streets there may never have been any. That does not change how to drive safely. Keep to your side of the road, do not overtake where you cannot see well ahead, slow down at junctions and look out for pedestrians.',
          'Remember that signs and markings tell people what they should do, but they do not guarantee that others will do it. A solid line does not stop someone else from overtaking on a bend. Read them, respect them and stay alert.',
          'At night and in rain, worn markings are even harder to see. In those conditions, slow down, use the edge of the road and the lights of other vehicles as reference points, and leave more distance. If you know a stretch where the paint has disappeared, remember it and plan ahead.'
        ]
      }
    ],
    example: {
      title: 'Picture this: a road with bends and hills',
      body: [
        'Picture yourself riding along an island road with bends and hills. On the straight, the centre line is dashed; before the bend it turns solid. Further on there are two lines side by side: the solid one on your side and the broken one on the other.',
        'You understand that you must not overtake on that stretch, but someone coming the other way could do so safely. So you hold your position, alert to the possibility of someone overtaking towards you. Coming into the village, you see a zebra crossing with faded paint and slow down: it is still a place where people cross.'
      ]
    },
    mistakes: [
      'Crossing a solid line to overtake, because it is usually there because visibility is not good enough.',
      'Thinking that with no line you can overtake anywhere, because missing paint does not change the danger of a bend.',
      'Stopping on top of a pedestrian crossing, because it forces people to cross between cars.',
      'Changing lanes at the last moment to turn, because it surprises people behind or alongside you.',
      'Trusting that others will respect the lines, because not everyone does.'
    ],
    checklist: [
      'Broken line: cross only if it is safe.',
      'Solid line: do not cross it.',
      'With double lines, the one on your side applies.',
      'Stop before the stop line.',
      'Approach crossings slowly and let people cross.',
      'Get into the turn lane in good time.',
      'If markings have faded, drive as if they were there.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-ley-transito', text: 'Road traffic in Honduras is governed by the Ley de Tránsito (Decreto 205-2005) and its later reforms.' },
      { kind: 'expert', text: 'The SIECA Central American Manual aims to make signs and markings uniform across the region. When an upright sign and a road marking seem to disagree, or the marking has worn away, be guided by the sign and by what you can see of the road.' },
      { kind: 'practical', text: 'Pay attention to the markings on the routes you use every day. Knowing where each solid line and crossing is helps you anticipate when the paint wears away.' }
    ],
    check: [
      {
        q: 'You see a solid line and a broken line together in the centre. The broken line is on your side. What does it mean?',
        options: [
          'Nobody may overtake.',
          'Only oncoming traffic may overtake.',
          'You may overtake if it is safe; oncoming traffic may not.'
        ],
        answer: 2,
        explain: 'The line closest to you applies. If it is broken, you may cross it when it is safe.'
      },
      {
        q: 'In general, in the Central American system, what does a yellow centre line indicate?',
        options: [
          'That traffic on the other side is coming in the opposite direction.',
          'That the road is for buses only.',
          'That it is a school zone.'
        ],
        answer: 0,
        explain: 'As a general rule, yellow lines separate opposite directions and white lines separate lanes going the same way. Even so, not every road follows the principle exactly.'
      },
      {
        q: 'The centre line on a bend has faded so much you cannot see it. What do you do?',
        options: [
          'Overtake, because there is no line forbidding it.',
          'Do not overtake: the bend still stops you seeing what is coming.',
          'Move to the centre to see better.'
        ],
        answer: 1,
        explain: 'Missing paint does not change the danger. Decide by what you can see of the road and by the signs.'
      }
    ],
    diagramCaption: 'Broken, solid and double centre lines, an edge line, a stop line and a pedestrian crossing.'
  }
};

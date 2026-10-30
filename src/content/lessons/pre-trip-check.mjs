export default {
  id: 'pre-trip-check',
  category: 'vehiculo',
  order: 1,
  minutes: 8,
  diagram: null,
  related: ['helmet-fit', 'moto-braking', 'moto-load-balance', 'rain-riding'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Seguridad de vehículos motorizados de dos y tres ruedas: manual de seguridad vial para decisores y profesionales, 2017',
      labelEn: 'World Health Organization (WHO), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners, 2017' },
    { label: 'Organización Mundial de la Salud (OMS), Cascos: manual de seguridad vial, 2.ª ed., 2023',
      labelEn: 'World Health Organization (WHO), Helmets: a road safety manual, 2nd ed., 2023' }
  ],
  es: {
    slug: 'revision-antes-de-salir',
    title: 'Revisa tu carro o tu moto antes de salir',
    dek: 'Unos minutos de revisión antes de salir pueden evitar una falla en el peor momento. Esta lección explica qué mirar, cada cuánto y por qué el clima de la isla exige atención extra.',
    objectives: [
      'Saber qué revisar en llantas, frenos, luces, espejos y fluidos.',
      'Distinguir entre la revisión rápida diaria y el mantenimiento periódico.',
      'Entender cómo el aire salado y la humedad aceleran el desgaste.',
      'Usar una lista de revisión antes de cada viaje en moto.'
    ],
    sections: [
      {
        heading: 'Llantas: tu único contacto con la calle',
        paragraphs: [
          'Todo lo que hace tu vehículo, frenar, girar y acelerar, pasa por unos pocos centímetros de llanta que tocan el suelo. Una llanta en mal estado alarga la frenada, hace que el vehículo resbale en mojado y puede reventarse.',
          'Revisa la <strong>presión</strong> con las llantas frías, usando la cifra que indica el fabricante del vehículo (normalmente en una etiqueta en el marco de la puerta, en el manual o, en motos, en el chasis), no la presión máxima escrita en la llanta. Una llanta baja se calienta, se desgasta por los lados y hace pesada la dirección; en moto, afecta mucho la estabilidad.',
          'Mira la <strong>banda de rodamiento</strong>: si el dibujo está casi liso o llega a los indicadores de desgaste, es hora de cambiarla, sobre todo con las lluvias. Busca también <strong>daños</strong>: cortes, bultos en los costados, clavos o grietas. Un bulto en el costado es señal de que la llanta puede fallar en cualquier momento.'
        ]
      },
      {
        heading: 'Frenos, luces, espejos y bocina',
        paragraphs: [
          '<strong>Frenos:</strong> antes de salir, el pedal o las manetas deben sentirse firmes, no esponjosos ni que lleguen hasta el fondo. En los primeros metros, prueba los frenos a baja velocidad. Ruidos metálicos, vibraciones o que el vehículo se jale hacia un lado al frenar son motivo para ir al taller.',
          '<strong>Luces y señales:</strong> enciende las luces bajas y altas, las direccionales de ambos lados, las luces de freno y la luz trasera. Para ver las de atrás, pide a alguien que mire o usa el reflejo en una pared. Un foco quemado te hace invisible justo cuando más lo necesitas.',
          '<strong>Espejos:</strong> limpios, firmes y ajustados a tu posición antes de arrancar, no en marcha. <strong>Bocina:</strong> debe sonar con claridad. En carro, revisa también que los <strong>limpiaparabrisas</strong> limpien sin dejar franjas y que haya agua en el depósito; en la isla un aguacero puede llegar de repente.'
        ]
      },
      {
        heading: 'Fluidos, combustible, carga y documentos',
        paragraphs: [
          'Con el motor frío y el vehículo en terreno plano, revisa el nivel de aceite del motor, del líquido de frenos y, en carros y algunas motos, del refrigerante. Una mancha nueva debajo del vehículo donde lo estacionas es señal de una fuga. Lleva combustible suficiente para el viaje y un margen: quedarte sin gasolina en una calle oscura o en una curva te deja expuesto.',
          'Toda carga debe ir asegurada para que no se mueva, no se caiga y no tape luces ni la placa. En moto, la carga mal puesta cambia el equilibrio y puede enredarse en la rueda o la cadena. Lleva contigo tu licencia y los documentos del vehículo.'
        ]
      },
      {
        heading: 'La cadena de la moto y el clima de la isla',
        paragraphs: [
          'En la moto, la <strong>cadena</strong> merece atención aparte. Debe tener la holgura que indica el manual, ni muy tensa ni colgando, y estar limpia y lubricada. Una cadena seca, oxidada o floja se desgasta rápido, hace saltar los cambios y, en el peor caso, puede salirse o romperse en marcha.',
          'Vivir junto al mar tiene un costo para los vehículos. El aire salado y la humedad aceleran la corrosión de la cadena, los discos y piezas de los frenos, los cables, las conexiones eléctricas y los bornes de la batería. Como precaución práctica, enjuaga con agua dulce el vehículo después de andar cerca de la playa o bajo la brisa salada, lubrica la cadena con más frecuencia, y revisa que las conexiones de luces y batería no tengan sulfato verde o blanco.'
        ]
      },
      {
        heading: 'Revisión diaria, mantenimiento y lista para la moto',
        paragraphs: [
          'La revisión diaria es rápida: una vuelta alrededor del vehículo mirando llantas, luces y fugas, y una prueba de frenos al arrancar. Toma uno o dos minutos y detecta la mayoría de los problemas antes de que se conviertan en peligro.',
          'El mantenimiento periódico es otra cosa: cambio de aceite, pastillas de freno, ajuste de cadena, revisión de suspensión y dirección, según el kilometraje o el tiempo que indique el manual. Hazlo con un mecánico de confianza y no lo pospongas porque “todavía anda”. Muchas fallas no avisan hasta que fallan.',
          'Si andas en moto, usa esta lista rápida antes de cada viaje. Cada punto toma segundos y cubre lo que más protege al conductor y al pasajero.'
        ],
        list: [
          'Casco puesto y bien abrochado.',
          'Pasajero protegido, con su propio casco abrochado.',
          'Llantas revisadas: presión, dibujo y daños.',
          'Frenos funcionando, delantero y trasero.',
          'Luces funcionando: delantera, trasera, freno y direccionales.',
          'Espejos ajustados.',
          'Combustible suficiente para el viaje.',
          'Sin ropa suelta ni carga mal asegurada.',
          'Conductor alerta y sobrio.',
          'Ruta y clima considerados antes de salir.'
        ]
      }
    ],
    example: {
      title: 'Un lunes por la mañana',
      body: [
        'Imagina a un señor que trabaja en mototaxi y cada mañana sale con prisa. Un lunes, antes de arrancar, se toma un minuto para mirar su moto y nota que la llanta trasera está baja y tiene un clavo. Además, la cadena suena seca después de una semana de brisa salada.',
        'En lugar de salir así, la lleva a la llantera de camino, le reparan la llanta y lubrica la cadena. Pierde veinte minutos. Si hubiera salido con la llanta baja y un pasajero atrás, una curva o un frenazo de emergencia habrían sido mucho más difíciles de controlar. Esa costumbre de un minuto protege su trabajo, a sus pasajeros y a él mismo.'
      ]
    },
    mistakes: [
      'Inflar las llantas con la presión máxima escrita en la llanta, porque esa no es la presión recomendada para tu vehículo.',
      'Ignorar un bulto en el costado de la llanta, porque indica que puede reventarse.',
      'Manejar con un foco de freno o de direccional quemado, porque los demás no saben que vas a frenar o girar.',
      'Dejar la cadena seca y oxidada, porque se desgasta rápido y puede romperse en marcha.',
      'Posponer el mantenimiento porque el vehículo “todavía anda”, porque muchas fallas no avisan.',
      'Llevar carga suelta en la moto, porque puede caerse o enredarse en la rueda.'
    ],
    checklist: [
      'Da una vuelta al vehículo antes de salir.',
      'Revisa presión, dibujo y daños de las llantas.',
      'Prueba los frenos en los primeros metros.',
      'Verifica luces, direccionales y luz de freno.',
      'Ajusta los espejos antes de arrancar.',
      'Revisa fluidos y busca fugas.',
      'Asegura la carga y lleva tus documentos.',
      'Enjuaga y lubrica más seguido por el aire salado.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-licencia', text: 'Para manejar se necesita una licencia válida para la categoría de vehículo; las licencias las emite la autoridad nacional de tránsito (DNVT).' },
      { kind: 'expert', text: 'Los manuales de la OMS sobre seguridad en moto destacan la importancia de que el vehículo esté en buen estado, con frenos, llantas y luces que funcionen, y de que el casco esté puesto y abrochado en cada viaje.' },
      { kind: 'practical', text: 'Guarda un medidor de presión pequeño en el vehículo: cuesta poco y te permite revisar las llantas cuando quieras.' }
    ],
    check: [
      {
        q: '¿Qué presión debes poner en las llantas?',
        options: [
          'La presión máxima escrita en el costado de la llanta.',
          'La que indica el fabricante del vehículo, medida con las llantas frías.',
          'La que se sienta dura al apretar con la mano.'
        ],
        answer: 1,
        explain: 'La cifra correcta está en la etiqueta o el manual del vehículo. La máxima de la llanta es un límite, no una recomendación.'
      },
      {
        q: '¿Por qué conviene lubricar la cadena de la moto más seguido en la isla?',
        options: [
          'Porque las calles de la isla son más largas.',
          'Porque así la moto gasta menos combustible.',
          'Porque el aire salado y la humedad aceleran la corrosión.'
        ],
        answer: 2,
        explain: 'La sal y la humedad oxidan la cadena y otras piezas metálicas más rápido. Lubricar y enjuagar con agua dulce ayuda a evitarlo.'
      },
      {
        q: 'Al revisar tu carro ves un bulto en el costado de una llanta. ¿Qué haces?',
        options: [
          'Cambias o haces revisar la llanta antes de salir, porque puede fallar.',
          'Sales normal y la revisas el fin de semana.',
          'Le bajas un poco de aire para que no se note.'
        ],
        answer: 0,
        explain: 'Un bulto indica daño en la estructura de la llanta. Puede reventarse en marcha, así que no debes usarla.'
      }
    ]
  },
  en: {
    slug: 'pre-trip-vehicle-check',
    title: 'Check your car or motorcycle before you go',
    dek: 'A few minutes of checking before you leave can prevent a failure at the worst possible moment. This lesson covers what to look at, how often, and why island conditions call for extra care.',
    objectives: [
      'Know what to check on tyres, brakes, lights, mirrors and fluids.',
      'Tell the difference between a quick daily check and periodic maintenance.',
      'Understand how salt air and humidity speed up wear.',
      'Use a checklist before every motorcycle ride.'
    ],
    sections: [
      {
        heading: 'Tyres: your only contact with the road',
        paragraphs: [
          'Everything your vehicle does, braking, turning and accelerating, goes through a few centimetres of tyre touching the ground. A tyre in poor condition lengthens braking distance, makes the vehicle slide in the wet and can burst.',
          'Check the <strong>pressure</strong> when the tyres are cold, using the figure the vehicle manufacturer gives (usually on a label in the door frame, in the manual or, on motorcycles, on the frame), not the maximum pressure printed on the tyre. An under-inflated tyre overheats, wears at the edges and makes steering heavy; on a motorcycle it badly affects stability.',
          'Look at the <strong>tread</strong>: if the pattern is almost smooth or down to the wear indicators, it is time to replace the tyre, especially in the rainy season. Look for <strong>damage</strong> as well: cuts, bulges in the sidewall, nails or cracks. A bulge in the sidewall means the tyre could fail at any moment.'
        ]
      },
      {
        heading: 'Brakes, lights, mirrors and horn',
        paragraphs: [
          '<strong>Brakes:</strong> before setting off, the pedal or levers should feel firm, not spongy, and should not go all the way down. In the first few metres, test the brakes at low speed. Grinding noises, vibration or the vehicle pulling to one side when braking are reasons to go to the workshop.',
          '<strong>Lights and indicators:</strong> switch on dipped and full beam, the indicators on both sides, the brake lights and the tail light. To check the rear ones, ask someone to look or use the reflection on a wall. A blown bulb makes you invisible just when you need to be seen.',
          '<strong>Mirrors:</strong> clean, firm and adjusted to your position before you move off, not while riding or driving. <strong>Horn:</strong> it should sound clearly. On a car, also check that the <strong>wipers</strong> clear the glass without streaking and that there is water in the washer reservoir; on the island a downpour can arrive without warning.'
        ]
      },
      {
        heading: 'Fluids, fuel, cargo and documents',
        paragraphs: [
          'With the engine cold and the vehicle on level ground, check the engine oil, brake fluid and, on cars and some motorcycles, the coolant. A new stain where you usually park is a sign of a leak. Carry enough fuel for the journey plus a margin: running out on a dark road or on a bend leaves you exposed.',
          'All cargo should be secured so it cannot shift, fall off or cover lights or the number plate. On a motorcycle, a badly placed load changes the balance and can catch in the wheel or chain. Carry your licence and the vehicle’s documents with you.'
        ]
      },
      {
        heading: 'The motorcycle chain and island conditions',
        paragraphs: [
          'On a motorcycle, the <strong>chain</strong> deserves its own attention. It should have the amount of slack the manual specifies, neither too tight nor sagging, and be clean and lubricated. A dry, rusty or loose chain wears out quickly, makes gears jump and, at worst, can come off or snap while you are riding.',
          'Living by the sea has a cost for vehicles. Salt air and humidity speed up corrosion of the chain, brake discs and parts, cables, electrical connections and battery terminals. As a practical precaution, rinse your vehicle with fresh water after riding near the beach or in salty breeze, lubricate the chain more often, and check that light and battery connections are free of green or white corrosion.'
        ]
      },
      {
        heading: 'Daily check, maintenance and the motorcycle list',
        paragraphs: [
          'The daily check is quick: a walk around the vehicle looking at tyres, lights and leaks, and a brake test as you set off. It takes a minute or two and catches most problems before they become dangerous.',
          'Periodic maintenance is different: oil changes, brake pads, chain adjustment, suspension and steering checks, at the mileage or time intervals in the manual. Have it done by a mechanic you trust, and do not put it off because the vehicle “still runs”. Many faults give no warning until they fail.',
          'If you ride, use this quick list before every trip. Each item takes seconds and covers what protects the rider and passenger most.'
        ],
        list: [
          'Helmet worn and secured.',
          'Passenger protected, with their own helmet fastened.',
          'Tyres inspected: pressure, tread and damage.',
          'Brakes working, front and rear.',
          'Lights functioning: headlight, tail light, brake light and indicators.',
          'Mirrors adjusted.',
          'Fuel sufficient for the journey.',
          'No loose clothing or unsecured cargo.',
          'Rider alert and sober.',
          'Route and weather considered before you leave.'
        ]
      }
    ],
    example: {
      title: 'A Monday morning',
      body: [
        'Picture a man who drives a mototaxi and leaves in a hurry every morning. One Monday, before setting off, he takes a minute to look over his motorcycle and notices that the rear tyre is low and has a nail in it. The chain also sounds dry after a week of salty breeze.',
        'Instead of heading out like that, he stops at the tyre shop on the way, gets the tyre repaired and lubricates the chain. He loses twenty minutes. If he had gone out on a soft tyre with a passenger on the back, a bend or an emergency stop would have been much harder to control. That one-minute habit protects his livelihood, his passengers and himself.'
      ]
    },
    mistakes: [
      'Inflating tyres to the maximum pressure printed on the tyre, because that is not the recommended pressure for your vehicle.',
      'Ignoring a bulge in a tyre sidewall, because it means the tyre could burst.',
      'Driving with a blown brake light or indicator bulb, because others cannot tell you are braking or turning.',
      'Leaving the chain dry and rusty, because it wears quickly and can snap while riding.',
      'Putting off maintenance because the vehicle “still runs”, because many faults give no warning.',
      'Carrying loose cargo on a motorcycle, because it can fall off or catch in the wheel.'
    ],
    checklist: [
      'Walk around the vehicle before you leave.',
      'Check tyre pressure, tread and damage.',
      'Test the brakes in the first few metres.',
      'Check lights, indicators and brake light.',
      'Adjust mirrors before moving off.',
      'Check fluids and look for leaks.',
      'Secure cargo and carry your documents.',
      'Rinse and lubricate more often because of the salt air.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-licencia', text: 'Driving requires a valid licence for the vehicle category; licences are issued by the national traffic authority (DNVT).' },
      { kind: 'expert', text: 'WHO manuals on motorcycle safety stress the importance of a vehicle in good condition, with working brakes, tyres and lights, and of wearing a fastened helmet on every trip.' },
      { kind: 'practical', text: 'Keep a small tyre-pressure gauge in the vehicle: it costs little and lets you check your tyres whenever you like.' }
    ],
    check: [
      {
        q: 'What pressure should you put in your tyres?',
        options: [
          'The maximum pressure printed on the tyre sidewall.',
          'The figure the vehicle manufacturer gives, measured with the tyres cold.',
          'Whatever feels hard when you press with your hand.'
        ],
        answer: 1,
        explain: 'The correct figure is on the vehicle’s label or in its manual. The maximum on the tyre is a limit, not a recommendation.'
      },
      {
        q: 'Why should you lubricate a motorcycle chain more often on the island?',
        options: [
          'Because island roads are longer.',
          'Because it makes the motorcycle use less fuel.',
          'Because salt air and humidity speed up corrosion.'
        ],
        answer: 2,
        explain: 'Salt and humidity rust the chain and other metal parts faster. Lubricating and rinsing with fresh water helps prevent it.'
      },
      {
        q: 'While checking your car you see a bulge in a tyre sidewall. What do you do?',
        options: [
          'Have the tyre replaced or inspected before you go, because it could fail.',
          'Drive as normal and check it at the weekend.',
          'Let a little air out so it is less noticeable.'
        ],
        answer: 0,
        explain: 'A bulge means the tyre’s structure is damaged. It can burst while you are moving, so it should not be used.'
      }
    ]
  }
};

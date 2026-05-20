// ============================================================
//  UMK3 — MOVE LIST DATA
//  Fuente: mortal-kombat.org/guias/guia_ultimate_mk3.txt
//
//  ABREVIATURAS:
//    GA = Golpe Alto    GB = Golpe Bajo
//    PA = Patada Alta   PB = Patada Baja
//    BL = Block         CR = Carrera
//    ↑ ↓ ← →  ↗ ↘ ↙   (flechas direccionales)
//    ↓+GA = presionar simultáneo
// ============================================================

const CHARACTERS = [

  // ══════════════════════════════════════════════
  //  CYRAX
  // ══════════════════════════════════════════════
  {
    id: 'cyrax', name: 'Cyrax', emoji: '💛',
    type: 'Cyborg Lin Kuei — Amarillo',
    desc: 'Unidad cibernética con sistema de bombas de plasma y red capturadora. Lucha internamente con su humanidad.',
    sprite: 'assets/sprites/cyrax.gif',
    specials: [
      { name: 'Energy Net',      seq: ['←','←','+','PB'],                          gif: 'cyrax_net.gif' },
      { name: 'Bomb Lejos',      seq: ['(hold PB)','→','→','+','PA'],               gif: 'cyrax_bomba_lejos.gif' },
      { name: 'Bomb Cerca',      seq: ['(hold PB)','←','←','+','PA'],               gif: 'cyrax_bomba_cerca.gif' },
      { name: 'Air Throw',       seq: ['↓','→','+','BL','GB'],   note: 'Cuando el rival salta', gif: 'cyrax_air_throw.gif' },
      { name: 'Teleport',        seq: ['→','↓','+','BL'],                            gif: 'cyrax_teleport.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','PA','GA','PA','←+PA'],  note: '6 hits' },
      { name: 'Combo 2', seq: ['GA','GA','GB'],                   note: '3 hits' },
      { name: 'Combo 3', seq: ['PA','PA','←+PA'],                 note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['↓','↓','→','↑','+','CR'],  note: 'Pegado',   gif: 'cyrax_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['(hold BL)','↓','↓','↑','↓','+','GA'],        gif: 'cyrax_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['CR','BL','CR'],             note: 'Pegado' },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','PA','GA','PA','PA','GA','PA','GA','PA','PB','GB'] , gif: 'cyrax_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','CR','CR','↑','+','CR'], note: 'No bloquear en el round final' , gif: 'cyrax_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['→','→','←','+','GA'],        note: 'No bloquear en el round final' , gif: 'cyrax_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],         note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  ERMAC
  // ══════════════════════════════════════════════
  {
    id: 'ermac', name: 'Ermac', emoji: '🔮',
    type: 'Entidad de Almas',
    desc: 'Entidad formada por miles de almas guerreras caídas en batalla. Poder telekinético devastador.',
    sprite: 'assets/sprites/ermac.gif',
    specials: [
      { name: 'Telekinetic',     seq: ['←','↓','←','+','PA'],                       gif: 'ermac_tk.gif' },
      { name: 'Teleport Punch',  seq: ['↓','←','+','GA'],   note: 'También en el aire', gif: 'ermac_teleport.gif' },
      { name: 'Fireball',        seq: ['↓','←','+','GB'],                            gif: 'ermac_fireball.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','PA','PB','←+PA'],          note: '4 hits' },
      { name: 'Combo 2', seq: ['PB','GB'],                       note: '2 hits' },
      { name: 'Combo 3', seq: ['GA','GA','←+GB','PA','←+PB'],  note: '5 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1 (Arcade)', seq: ['CR','BL','CR','CR','PA'],                note: 'Cerca',  gif: 'ermac_fatality1.gif' },
      { name: 'Fatality 2 (Arcade)', seq: ['↓','↑','↓','↓','↓','BL'],               note: 'Pegado', gif: 'ermac_fatality2.gif' },
      { name: 'Stage Fatality',      seq: ['CR','CR','CR','CR','PB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','PA','GB','BL','PA','PB','BL','GA','GB','PB','PA'] , gif: 'ermac_brutality.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','←','←','GA'],        note: 'Arcade — No bloquear' , gif: 'ermac_babality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['→','→','→','GA'],             note: 'Arcade — No bloquear' , gif: 'ermac_friendship.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  JADE
  // ══════════════════════════════════════════════
  {
    id: 'jade', name: 'Jade', emoji: '💚',
    type: 'Asesina de la Realeza',
    desc: 'Asesina personal de Shao Kahn. Amiga de la infancia de Kitana. Inmune a los proyectiles.',
    sprite: 'assets/sprites/jade.gif',
    specials: [
      { name: 'Boomerang',           seq: ['←','→','+','GB'],                        gif: 'jade_boomerang.gif' },
      { name: 'Boomerang Bajo',      seq: ['←','→','+','PB'],                        gif: 'jade_boomerang_bajo.gif' },
      { name: 'Boomerang Alto',      seq: ['←','→','+','GA'],                        gif: 'jade_boomerang_alto.gif' },
      { name: 'Antiproyectiles',     seq: ['←','→','+','PA'],                        gif: 'jade_escudo.gif' },
      { name: 'Shadow Kick',         seq: ['↓','→','+','PB'],                        gif: 'jade_shadow_kick.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','↓+GB','↓+GA'],           note: '4 hits' },
      { name: 'Combo 2', seq: ['PA','PA','PB','←+PA'],              note: '4 hits' },
      { name: 'Combo 3', seq: ['GA','GA','↓+GB','PB','PA','PB','←+PA'], note: '7 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1', seq: ['(hold BL)','↑','↑','(soltar BL)','↓','→','+','GA'], note: 'Pegado', gif: 'jade_fatality1.gif' },
      { name: 'Fatality 2', seq: ['CR','CR','CR','BL','CR'],         note: 'Pegado',  gif: 'jade_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['←','→','↓','+','CR'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','PB','GA','GB','PA','PA','PB','BL','BL','GA','PA'] , gif: 'jade_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['←','↓','←','←','+','PA'],    note: 'No bloquear' , gif: 'jade_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','→','↓','+','PA'],     note: 'No bloquear' , gif: 'jade_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  JAX
  // ══════════════════════════════════════════════
  {
    id: 'jax', name: 'Jax', emoji: '🦾',
    type: 'Mayor — Fuerzas Especiales',
    desc: 'Mayor con brazos bióticos de titanio. El compañero de Sonya en las fuerzas especiales.',
    sprite: 'assets/sprites/jax.gif',
    specials: [
      { name: 'Fireball',       seq: ['←','→','+','GA'],                             gif: 'jax_fireball.gif' },
      { name: 'Doble Fireball', seq: ['→','→','←','←','+','GA'],                     gif: 'jax_fireball2.gif' },
      { name: 'Air Breaker',    seq: ['BL'],                  note: 'Pegado al rival en el aire' },
      { name: 'Catch',          seq: ['→','→','+','GB'],      note: 'Luego presionar GB rápido', gif: 'jax_catch.gif' },
      { name: 'Earthquake',     seq: ['(hold PB 3 seg)'],                             gif: 'jax_earthquake.gif' },
      { name: 'Bionic Rush',    seq: ['→','→','+','PA'],                              gif: 'jax_rush.gif' },
      { name: 'Multislam',      seq: ['agarrar con GB', '→ presionar GA repetido'],   gif: 'jax_slam.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','PA','←+PA'],                          note: '3 hits' },
      { name: 'Combo 2', seq: ['GA','GA','BL','GB','←+GA'],                note: '5 hits' },
      { name: 'Combo 3', seq: ['PA','PA','↓+GA','GA','BL','GB','←+GA'],   note: '7 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1', seq: ['(hold BL)','↑','↓','→','↑','(soltar + BL)'],  note: 'Pegado',       gif: 'jax_fatality1.gif' },
      { name: 'Fatality 2', seq: ['CR','BL','CR','CR','PB'],                      note: 'Media pantalla',gif: 'jax_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['↓','→','↓','+','GB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GA','GA','BL','GB','GA','GA','GA','BL','GB','GA'] , gif: 'jax_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['PB','CR','CR','PB'],          note: 'No bloquear' , gif: 'jax_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','↓','+','PB'],         note: 'No bloquear' , gif: 'jax_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  KABAL
  // ══════════════════════════════════════════════
  {
    id: 'kabal', name: 'Kabal', emoji: '⚡',
    type: 'Ex-Black Dragon',
    desc: 'Desfigurado y resucitado por Shao Kahn. El luchador más veloz de todos los reinos. Sus kamas son letales.',
    sprite: 'assets/sprites/kabal.gif',
    specials: [
      { name: 'Spin Dash',    seq: ['←','→','+','PB'],                               gif: 'kabal_dash.gif' },
      { name: 'Ground Blade', seq: ['←','←','←','+','CR'],                           gif: 'kabal_saw.gif' },
      { name: 'Eye Fireball', seq: ['←','←','+','GA'],   note: 'También en el aire', gif: 'kabal_fireball.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PB','PB','GA','GA','↓+GB','↓+GA'], note: '6 hits' },
      { name: 'Combo 2', seq: ['PB','PB','GA','GA','PA','←+PA'],   note: '6 hits' },
      { name: 'Combo 3', seq: ['GA','GA','↓+GA'],                  note: '3 hits' },
      { name: 'Combo 4', seq: ['PB','PB','←+PA'],                  note: '3 hits' },
      { name: 'Combo 5', seq: ['PB','PB','PA','←+PA'],             note: '4 hits' },
      { name: 'Combo 6', seq: ['GA','GA','↓+GB','↓+GA'],           note: '4 hits' },
      { name: 'Combo 7', seq: ['PB','PB','GA','GA','↓+GA'],        note: '5 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['↓','↓','←','→','+','BL'],  note: 'A 2 pasos',  gif: 'kabal_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['CR','BL','BL','BL','PA'],   note: 'Pegado',      gif: 'kabal_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['BL','BL','PA'],             note: 'Pegado' },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','BL','PB','PB','PA','GB','GB','GB','GA','GB','GB'] , gif: 'kabal_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','PB','CR','CR','+','↑'],  note: 'No bloquear' , gif: 'kabal_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['CR','CR','CR','PB'],           note: 'No bloquear' , gif: 'kabal_babality.gif' },
      { type: 'animality',  name: 'Animality',   seq: ['(hold GA)','→','→','↓','→','(soltar GA)'], note: 'Pegado — tras Mercy' , gif: 'kabal_animality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],           note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  KANO
  // ══════════════════════════════════════════════
  {
    id: 'kano', name: 'Kano', emoji: '🔴',
    type: 'Mercenario — Black Dragon',
    desc: 'Mercenario despiadado con ojo cibernético láser. Fundador del cartel Black Dragon.',
    sprite: 'assets/sprites/kano.gif',
    specials: [
      { name: 'Knife Throw',   seq: ['↓','←','+','GA'],                              gif: 'kano_knife.gif' },
      { name: 'Knife Uppercut',seq: ['↓','→','+','GA'],                              gif: 'kano_uppercut.gif' },
      { name: 'Canonball',     seq: ['(hold PB 3 seg)'],                              gif: 'kano_ball.gif' },
      { name: 'Grab & Shake',  seq: ['↓','→','+','GB'],                              gif: 'kano_grab.gif' },
      { name: 'Air Throw',     seq: ['BL'],              note: 'Pegado al rival en el aire' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PB','GB'],                          note: '2 hits' },
      { name: 'Combo 2', seq: ['↓+GB','↓+GA'],                     note: '2 hits' },
      { name: 'Combo 3', seq: ['GA','GA','↓+GB','↓+GA'],           note: '4 hits' },
      { name: 'Combo 4', seq: ['PA','PA','PB','←+PA'],             note: '4 hits' },
      { name: 'Combo 5', seq: ['GA','GA','PA','PB','←+PA'],        note: '5 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['GB','BL','BL','PA'],                          note: 'A 2 pasos',  gif: 'kano_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['(hold GB)','→','↓','↓','→','(soltar GB)'],   note: 'Pegado',     gif: 'kano_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['(hold BL)','↑','↑','←','+','PB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GB','BL','GB','GA','BL','PA','PB','BL','PA','PB','PB'] , gif: 'kano_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['PB','CR','CR','PA'],           note: 'No bloquear' , gif: 'kano_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['→','→','↓','↓','+','PB'],      note: 'No bloquear' , gif: 'kano_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],           note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  KITANA
  // ══════════════════════════════════════════════
  {
    id: 'kitana', name: 'Kitana', emoji: '🪭',
    type: 'Princesa de Edenia',
    desc: 'Princesa de 10.000 años. Sus abanicos de acero pueden cortar cualquier cosa. Luchó contra Shao Kahn para liberar su reino.',
    sprite: 'assets/sprites/kitana.gif',
    specials: [
      { name: 'Fan Lift',       seq: ['←','←','←','+','GA'],                         gif: 'kitana_fanlift.gif' },
      { name: 'Fan Throw',      seq: ['→','→','+','GB+GA'],  note: 'También en el aire', gif: 'kitana_fanthrow.gif' },
      { name: 'Teleport Punch', seq: ['←','↓','+','GA'],                              gif: 'kitana_teleport.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','←+GB','→+GA'],  note: '4 hits' },
      { name: 'Combo 2', seq: ['PA','PA','PB','←+PA'],    note: '4 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['←','↓','→','→','+','PA'],  note: 'Pegado',  gif: 'kitana_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['CR','CR','BL','BL','PB'],   note: 'Pegado',  gif: 'kitana_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['→','↓','↓','+','PB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GA','BL','PA','BL','PB','BL','GB','BL','GA','BL'] , gif: 'kitana_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['↓','←','→','→','+','GB'],    note: 'No bloquear' , gif: 'kitana_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['→','→','↓','→','+','PA'],     note: 'No bloquear' , gif: 'kitana_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  KUNG LAO
  // ══════════════════════════════════════════════
  {
    id: 'kunglao', name: 'Kung Lao', emoji: '🎩',
    type: 'Monje Shaolin',
    desc: 'Descendiente del legendario Gran Kung Lao. Su sombrero cuchilla es su arma más letal.',
    sprite: 'assets/sprites/kunglao.gif',
    specials: [
      { name: 'Hat Throw',  seq: ['←','→','+','GB'],                                  gif: 'kunglao_hat.gif' },
      { name: 'Spin',       seq: ['→','↓','+','CR'],  note: 'Luego presionar CR rápido', gif: 'kunglao_spin.gif' },
      { name: 'Dive Kick',  seq: ['↓','+','PA'],      note: 'En el aire',               gif: 'kunglao_dive.gif' },
      { name: 'Teleport',   seq: ['↓','↑'],                                             gif: 'kunglao_teleport.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PB','PB','←+PA'],                          note: '3 hits' },
      { name: 'Combo 2', seq: ['GA','GB','GA','GB','PB','PB','←+PA'],      note: '7 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['BL','CR','BL','CR','+','↓'],                   gif: 'kunglao_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['→','→','←','↓','+','GA'],  note: 'Pegado',     gif: 'kunglao_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['↓','↓','→','→','+','PB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GB','PB','PA','BL','GA','GB','PB','PA','BL','GA'] , gif: 'kunglao_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','GB','CR','PB'],           note: 'No bloquear' , gif: 'kunglao_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','→','→','+','GA'],          note: 'No bloquear' , gif: 'kunglao_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],           note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  LIU KANG
  // ══════════════════════════════════════════════
  {
    id: 'liukang', name: 'Liu Kang', emoji: '🐲',
    type: 'Campeón de la Tierra',
    desc: 'Elegido por los Dioses de la Tierra para defender el reino. Heredero del poder del dragón de fuego.',
    sprite: 'assets/sprites/liukang.gif',
    specials: [
      { name: 'Fireball',         seq: ['→','→','+','GA'],  note: 'También en el aire', gif: 'liukang_fireball.gif' },
      { name: 'Fireball Agachado',seq: ['→','→','+','GB'],                              gif: 'liukang_fireball_bajo.gif' },
      { name: 'Flying Kick',      seq: ['→','→','+','PA'],                              gif: 'liukang_flying_kick.gif' },
      { name: 'Bike Kick',        seq: ['(hold PB 5 seg)'],                             gif: 'liukang_bike_kick.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PB','PB','PA','PB'],                    note: '4 hits' },
      { name: 'Combo 2', seq: ['GA','GA','BL','PB','PB','PA','PB'],     note: '7 hits' },
      { name: 'Combo 3', seq: ['GA','GA','←+GB'],                       note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['→','→','↓','↓','+','PB'],                      gif: 'liukang_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['(hold BL+CR)','↑','↓','↑','↑','(soltar + BL+CR)'], gif: 'liukang_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['CR','BL','BL','PB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GB','GA','BL','PB','PA','PB','PA','GB','GB','GA'] , gif: 'liukang_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','CR','CR','↓','+','CR'],   note: 'No bloquear' , gif: 'liukang_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','↓','+','PA'],          note: 'No bloquear' , gif: 'liukang_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],           note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  MILEENA
  // ══════════════════════════════════════════════
  {
    id: 'mileena', name: 'Mileena', emoji: '🌸',
    type: 'Clon de Kitana',
    desc: 'Clon mutante de Kitana creado por Shang Tsung. Mitad humana, mitad Tarkatan. Brutal e impredecible.',
    sprite: 'assets/sprites/mileena.gif',
    specials: [
      { name: 'Sai Toss',    seq: ['(hold GA 2 seg)'],  note: 'También en el aire',   gif: 'mileena_sai.gif' },
      { name: 'Roll Attack', seq: ['←','←','↓','+','PA'],                             gif: 'mileena_roll.gif' },
      { name: 'Drop Kick',   seq: ['→','→','+','PB'],                                 gif: 'mileena_drop.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','↑+GB','↓+GB'],            note: '4 hits' },
      { name: 'Combo 2', seq: ['GA','GA','PA','PA','↑+PB','↑+PA'],  note: '6 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['←','←','←','→','+','PB'],    note: 'A 1 pantalla',  gif: 'mileena_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['↓','→','↓','→','+','GB'],     note: 'Pegado',        gif: 'mileena_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['↓','↓','↓','+','GB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GB','GB','GA','BL','PA','PB','PA','BL','GA','GB'] , gif: 'mileena_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['↓','↓','←','→','+','GA'],    note: 'No bloquear' , gif: 'mileena_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','→','→','+','GA'],     note: 'No bloquear' , gif: 'mileena_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  NIGHTWOLF
  // ══════════════════════════════════════════════
  {
    id: 'nightwolf', name: 'Night Wolf', emoji: '🐺',
    type: 'Chamán Nativo Americano',
    desc: 'Chamán guerrero. Protector de su pueblo. Eje entre el mundo físico y el plano espiritual.',
    sprite: 'assets/sprites/nightwolf.gif',
    specials: [
      { name: 'Arrow',          seq: ['↓','←','+','GB'],                              gif: 'nightwolf_arrow.gif' },
      { name: 'Axe Uppercut',   seq: ['↓','→','+','GA'],                              gif: 'nightwolf_axe.gif' },
      { name: 'Reflect',        seq: ['←','←','←','+','PA'],                          gif: 'nightwolf_reflect.gif' },
      { name: 'Shadow Shoulder',seq: ['→','→','+','PB'],                              gif: 'nightwolf_shoulder.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PB','GA','GA','GB','PA'],  note: '5 hits' },
      { name: 'Combo 2', seq: ['PA','PA','←+PA'],          note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['(hold BL)','↑','↑','←','→','(soltar + BL)'],  note: 'Pegado',    gif: 'nightwolf_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['←','←','←','↓','+','GA'],                     note: 'A 2 pasos', gif: 'nightwolf_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['CR','CR','CR','BL'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GA','PA','PB','PB','BL','GB','GB','GA','PA'] , gif: 'nightwolf_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','CR','CR','↓','+','CR'],  note: 'No bloquear' , gif: 'nightwolf_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['→','←','→','←','+','GB'],     note: 'No bloquear' , gif: 'nightwolf_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  NOOB SAIBOT
  // ══════════════════════════════════════════════
  {
    id: 'noobsaibot', name: 'Noob Saibot', emoji: '🖤',
    type: 'Sombra del Netherrealm',
    desc: 'Una sombra oscura y misteriosa del Netherrealm. Su identidad real es un secreto del juego.',
    sprite: 'assets/sprites/noobsaibot.gif',
    specials: [
      { name: 'Disabler',     seq: ['↓','→','+','GB'],                               gif: 'noob_disabler.gif' },
      { name: 'Teleport PD',  seq: ['↓','↑'],                                         gif: 'noob_teleport.gif' },
      { name: 'Shadow',       seq: ['→','→','+','GA'],                                gif: 'noob_shadow.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PB','PB','PB','PB'],  note: '4 hits' },
      { name: 'Combo 2', seq: ['GA','GA','GB','PA'],  note: '4 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1 (Arcade)', seq: ['←','←','→','→','PA'],     note: 'Media pantalla', gif: 'noob_fatality1.gif' },
      { name: 'Fatality 2 (Arcade)', seq: ['↓','↓','↑','CR'],                                  gif: 'noob_fatality2.gif' },
      { name: 'Stage Fatality',      seq: ['→','↓','→','BL'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','PB','GB','BL','PB','PA','GA','GB','BL','PB','PA'] , gif: 'noob_brutality.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['→','→','→','GB'],             note: 'Arcade — No bloquear' , gif: 'noob_babality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['→','→','←','GA'],            note: 'Arcade — Toda la pantalla' , gif: 'noob_friendship.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],         note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  RAIN
  // ══════════════════════════════════════════════
  {
    id: 'rain', name: 'Rain', emoji: '🟣',
    type: 'Ninja Morado — Edenia',
    desc: 'Príncipe de Edenia. Solo disponible en versiones SNES/Megadrive, no en Arcade ni Saturn.',
    sprite: 'assets/sprites/rain.gif',
    specials: [
      { name: 'Control Ball', seq: ['↓','→','+','GA'],                               gif: 'rain_ball.gif' },
      { name: 'Lightning',    seq: ['←','←','+','GA'],                               gif: 'rain_lightning.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','GB','GA'],        note: '4 hits' },
      { name: 'Combo 2', seq: ['PA','PA','PB','PA','←+PA'], note: '5 hits' },
    ],
    fatalities: [],
    extras: [
      { type: 'brutality', name: 'Brutality', seq: ['GA','GA','BL','PB','PA','BL','PB','PA','BL','GA','GB'] , gif: 'rain_brutality.gif' },
      { type: 'mercy',     name: 'Mercy',     seq: ['CR','CR','CR','PB'], note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  REPTILE
  // ══════════════════════════════════════════════
  {
    id: 'reptile', name: 'Reptile', emoji: '🦎',
    type: 'Ninja Reptiliano',
    desc: 'Último sobreviviente de su especie. Sirviente leal de Shao Kahn. Ácido y velocidad son sus armas.',
    sprite: 'assets/sprites/reptile.gif',
    specials: [
      { name: 'Slow Powerball',  seq: ['←','←','+','GB+GA'],                         gif: 'reptile_slow_ball.gif' },
      { name: 'Fast Powerball',  seq: ['→','→','+','GB+GA'],                          gif: 'reptile_fast_ball.gif' },
      { name: 'Slide',           seq: ['←','+','BL+GB/PB'],                           gif: 'reptile_slide.gif' },
      { name: 'Elbow Rush',      seq: ['←','→','+','PB'],                             gif: 'reptile_elbow.gif' },
      { name: 'Acid Spit',       seq: ['→','→','+','GA'],                             gif: 'reptile_acid.gif' },
      { name: 'Invisibility',    seq: ['(hold BL)','↑','↑','(soltar BL)','↓','+','PA'], gif: 'reptile_invisible.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','PA','←+PA'],          note: '3 hits' },
      { name: 'Combo 2', seq: ['GA','GA','PA','←+PA'],     note: '4 hits' },
      { name: 'Combo 3', seq: ['GA','GA','↓+GB'],          note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['←','→','↓','+','BL'],          note: 'Media pantalla', gif: 'reptile_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['(hold BL)','→','→','↑','↑','+','PA'], note: 'A 1 paso', gif: 'reptile_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['BL','CR','BL','BL'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','BL','PA','PA','BL','GA','GB','PB','PB','BL','GB'] , gif: 'reptile_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['↓','→','→','←','+','PA'],   note: 'Pegado — No bloquear' , gif: 'reptile_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['→','→','←','↓','+','PB'],   note: 'No bloquear' , gif: 'reptile_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],        note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SCORPION
  // ══════════════════════════════════════════════
  {
    id: 'scorpion', name: 'Scorpion', emoji: '🦂',
    type: 'Ninja Espectral',
    desc: 'Guerrero espectral del Netherrealm. Regresó de entre los muertos para vengar a su clan y familia. Su grito "GET OVER HERE" es el más famoso de la historia de los videojuegos.',
    sprite: 'assets/sprites/scorpion.gif',
    specials: [
      { name: 'Spear',          seq: ['←','←','+','GB'],                              gif: 'scorpion_spear.gif' },
      { name: 'Teleport Punch', seq: ['↓','←','+','GA'],  note: 'También en el aire', gif: 'scorpion_teleport.gif' },
      { name: 'Air Throw',      seq: ['BL'],              note: 'Pegado al rival en el aire' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','PA','PB','PB'],      note: '4 hits' },
      { name: 'Combo 2', seq: ['GA','GA','PA','←+PA'],    note: '4 hits' },
      { name: 'Combo 3', seq: ['GA','GA','↑+GB'],         note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['→','→','↓','↑','+','CR'],  note: 'Pegado',       gif: 'scorpion_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['↓','↓','↑','+','PA'],      note: 'Media pantalla',gif: 'scorpion_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['(hold BL)','→','↑','(soltar BL)','↑','+','GB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GA','BL','PA','PA','PB','PA','GA','GA','GB','GA'] , gif: 'scorpion_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['←','→','→','←','+','PB'],    note: 'Pegado — No bloquear' , gif: 'scorpion_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','←','←','→','+','GA'],    note: 'No bloquear' , gif: 'scorpion_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],         note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SEKTOR
  // ══════════════════════════════════════════════
  {
    id: 'sektor', name: 'Sektor', emoji: '🤖',
    type: 'Cyborg Lin Kuei — Rojo',
    desc: 'Unidad de combate cibernético del Lin Kuei. Hijo del Gran Maestro. Arsenal de misiles de largo alcance.',
    sprite: 'assets/sprites/sektor.gif',
    specials: [
      { name: 'Missile',        seq: ['→','→','+','GB'],                              gif: 'sektor_missile.gif' },
      { name: 'Homing Missile', seq: ['↓','←','+','GA'],                             gif: 'sektor_homing.gif' },
      { name: 'Teleport Punch', seq: ['→','→','+','PB'],  note: 'También en el aire', gif: 'sektor_teleport.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','PA','←+PA'],  note: '4 hits' },
      { name: 'Combo 2', seq: ['PA','PA'],               note: '2 hits' },
      { name: 'Combo 3', seq: ['GA','GA','↓+GB'],        note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['GB','CR','CR','BL'],          note: 'A 2 pasos',    gif: 'sektor_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['→','→','→','←','+','BL'],    note: 'A 1 pantalla',  gif: 'sektor_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['↓','↓','↓','+','CR'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GA','BL','BL','PA','PA','PB','PB','GB','GB','GA'] , gif: 'sektor_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','CR','CR','+','↓'],       note: 'No bloquear' , gif: 'sektor_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['←','↓','↓','↓','+','PA'],     note: 'No bloquear' , gif: 'sektor_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SHANG TSUNG
  // ══════════════════════════════════════════════
  {
    id: 'shangtsung', name: 'Shang Tsung', emoji: '💀',
    type: 'Hechicero Devorador de Almas',
    desc: 'Hechicero anciano que roba las almas de sus víctimas. Puede transformarse en cualquier luchador del roster.',
    sprite: 'assets/sprites/shangtsung.gif',
    specials: [
      { name: 'Flaming Skull ×1',        seq: ['←','←','+','GA'],                    gif: 'shang_skull1.gif' },
      { name: 'Flaming Skull ×2',        seq: ['←','←','→','+','GA'],                gif: 'shang_skull2.gif' },
      { name: 'Flaming Skull ×3',        seq: ['←','←','→','→','+','GA'],            gif: 'shang_skull3.gif' },
      { name: 'Skulls desde el infierno',seq: ['→','←','←','+','PB'],                gif: 'shang_hell.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','GB','←+PA'],    note: '4 hits' },
      { name: 'Combo 2', seq: ['PA','PA','←+PA'],         note: '3 hits' },
      { name: 'Combo 3', seq: ['PA','GA','GA','GB','←+PA'], note: '5 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['(hold GB)','↓','→','→','↓','(soltar GB)'],   note: 'Pegado',  gif: 'shang_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['(hold GB)','CR','BL','CR','BL','(soltar GB)'],note: 'Pegado',  gif: 'shang_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['(hold BL)','↑','↑','←','GB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','BL','BL','BL','PB','GA','GB','GB','BL','BL','BL'] , gif: 'shang_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['PB','CR','CR','+','↓'],       note: 'No bloquear' , gif: 'shang_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['CR','CR','CR','PB'],           note: 'No bloquear' , gif: 'shang_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SINDEL
  // ══════════════════════════════════════════════
  {
    id: 'sindel', name: 'Sindel', emoji: '👸',
    type: 'Reina de Edenia',
    desc: 'Reina de Edenia resucitada por Shao Kahn. Su grito supersónico puede matar instantáneamente.',
    sprite: 'assets/sprites/sindel.gif',
    specials: [
      { name: 'Fireball',        seq: ['→','→','+','GB'],                             gif: 'sindel_fireball.gif' },
      { name: 'Fireball en aire',seq: ['↓','→','+','PB'],  note: 'En el aire',        gif: 'sindel_fireball_air.gif' },
      { name: 'Fly',             seq: ['←','→','+','PA'],  note: 'BL para aterrizar', gif: 'sindel_fly.gif' },
      { name: 'Scream',          seq: ['→','→','→','+','GA'],                         gif: 'sindel_scream.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','GA','GA','↓+GA'],        note: '4 hits' },
      { name: 'Combo 2', seq: ['PA','GA','GA','GB','PA'],      note: '5 hits' },
      { name: 'Combo 3', seq: ['GA','GA','↓+GA'],             note: '3 hits' },
      { name: 'Combo 4', seq: ['PA','PA','←+PA'],             note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['CR','CR','BL','BL','CR','+','BL'],  note: 'Pegado',    gif: 'sindel_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['CR','CR','BL','CR','BL'],           note: 'A 2 pasos', gif: 'sindel_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['↓','↓','↓','+','GB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','BL','PB','BL','PB','PA','BL','PA','PA','PB','BL','GB'] , gif: 'sindel_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','CR','CR','CR','CR','CR','↑','+','CR'], note: 'No bloquear' , gif: 'sindel_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['CR','CR','CR','CR','CR','↑'],               note: 'No bloquear' , gif: 'sindel_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],                        note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SMOKE (robot)
  // ══════════════════════════════════════════════
  {
    id: 'smoke', name: 'Smoke', emoji: '💨',
    type: 'Cyborg Ninja de Humo',
    desc: 'Ex-agente humano del Lin Kuei convertido en cyborg contra su voluntad. Maestro del humo y la invisibilidad.',
    sprite: 'assets/sprites/smoke.gif',
    specials: [
      { name: 'Spear',          seq: ['←','←','+','GB'],                              gif: 'smoke_spear.gif' },
      { name: 'Air Throw',      seq: ['BL'],              note: 'Pegado al rival en el aire' },
      { name: 'Teleport Punch', seq: ['→','→','+','PB'],  note: 'También en el aire', gif: 'smoke_teleport.gif' },
      { name: 'Invisibilidad',  seq: ['(hold BL)','↑','↑','+','CR'],                  gif: 'smoke_invisible.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','PB','PA','GB'],  note: '5 hits' },
      { name: 'Combo 2', seq: ['GA','GA','GB'],            note: '3 hits' },
      { name: 'Combo 3', seq: ['PA','PA','GB'],            note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['(hold BL)','↑','↑','→','↓'],                          note: 'A 1 pantalla', gif: 'smoke_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['(hold BL+CR)','↓','↓','→','↑'],                       note: 'A 2 pasos',    gif: 'smoke_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['→','→','↓','+','PB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','PB','PB','PA','BL','BL','GB','GB','GA','BL','BL'] , gif: 'smoke_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','CR','CR','PA'],           note: 'No bloquear' , gif: 'smoke_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','←','←','+','PA'],     note: 'No bloquear' , gif: 'smoke_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SONYA
  // ══════════════════════════════════════════════
  {
    id: 'sonya', name: 'Sonya', emoji: '💪',
    type: 'Teniente — Fuerzas Especiales',
    desc: 'Oficial de élite de las fuerzas especiales. Persiguió al cartel Black Dragon hasta el torneo.',
    sprite: 'assets/sprites/sonya.gif',
    specials: [
      { name: 'Energy Rings',   seq: ['↓','→','+','GB'],                              gif: 'sonya_rings.gif' },
      { name: 'Leg Grab',       seq: ['↓','+','BL+GB'],                               gif: 'sonya_leggrab.gif' },
      { name: 'Teleport Punch', seq: ['→','←','+','GA'],                              gif: 'sonya_teleport.gif' },
      { name: 'Upward Bike Kick',seq: ['←','←','↓','+','PA'],                        gif: 'sonya_bike_kick.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','PA','←+PA'],               note: '3 hits' },
      { name: 'Combo 2', seq: ['GA','GA','GB','←+GA'],          note: '4 hits' },
      { name: 'Combo 3', seq: ['PA','PA','GA','GA','GB','←+GA'],note: '6 hits' },
      { name: 'Combo 4', seq: ['PA','PA','GA','GA','↑+GB'],     note: '5 hits' },
      { name: 'Combo 5', seq: ['GA','GA','↑+GB'],               note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['←','→','↓','↓','+','CR'],                     gif: 'sonya_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['(hold BL+CR)','↑','↑','←','↓'],               note: 'A 1 pantalla', gif: 'sonya_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['→','→','↓','+','GA'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','PB','BL','GA','PB','BL','GA','GB','BL','PA','PB'] , gif: 'sonya_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['←','→','←','↓','+','CR'],    note: 'No bloquear' , gif: 'sonya_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','→','+','PB'],         note: 'No bloquear' , gif: 'sonya_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],          note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  STRYKER
  // ══════════════════════════════════════════════
  {
    id: 'stryker', name: 'Stryker', emoji: '👮',
    type: 'Oficial de Policía',
    desc: 'Policía de combate con armamento moderno. El único luchador común y corriente del torneo.',
    sprite: 'assets/sprites/stryker.gif',
    specials: [
      { name: 'Low Grenade',     seq: ['↓','←','+','GB'],                             gif: 'stryker_grenade_low.gif' },
      { name: 'High Grenade',    seq: ['↓','←','+','GA'],                             gif: 'stryker_grenade_hi.gif' },
      { name: 'Truncheon Trip',  seq: ['→','←','+','GB'],                             gif: 'stryker_truncheon.gif' },
      { name: 'Truncheon Throw', seq: ['→','→','+','PA'],                             gif: 'stryker_throw.gif' },
      { name: 'Gun Blaster',     seq: ['←','→','+','GA'],                             gif: 'stryker_gun.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','GA','GA','GB'],   note: '4 hits' },
      { name: 'Combo 2', seq: ['PB','PA','←+PA'],      note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['→','→','→','+','PB'],          note: 'A 1 pantalla',  gif: 'stryker_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['↓','→','↓','→','+','BL'],      note: 'Pegado',        gif: 'stryker_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['(hold BL)','→','↑','↑','+','PA'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','GB','PA','PB','GA','GB','PB','PA','GA','PB','PB'] , gif: 'stryker_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['CR','GB','CR','PB'],           note: 'No bloquear' , gif: 'stryker_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','→','→','←','+','GA'],      note: 'No bloquear' , gif: 'stryker_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],           note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SUB-ZERO
  // ══════════════════════════════════════════════
  {
    id: 'subzero', name: 'Sub-Zero', emoji: '❄️',
    type: 'Guerrero Lin Kuei',
    desc: 'Maestro del hielo del clan Lin Kuei. Hermano menor del Sub-Zero original. Puede congelar a sus oponentes instantáneamente.',
    sprite: 'assets/sprites/subzero.gif',
    specials: [
      { name: 'Ice Blast',   seq: ['↓','→','+','GB'],                                 gif: 'subzero_blast.gif' },
      { name: 'Ice Shower',  seq: ['↓','→','+','GA'],                                 gif: 'subzero_shower.gif' },
      { name: 'Ice Clone',   seq: ['↓','←','+','GB'],   note: 'También en el aire',   gif: 'subzero_clone.gif' },
      { name: 'Slide',       seq: ['←','+','BL+GB/PB'],                               gif: 'subzero_slide.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','GB','PB','PA','←+PA'],  note: '6 hits' },
      { name: 'Combo 2', seq: ['PA','PA','←+PA'],                 note: '3 hits' },
      { name: 'Combo 3', seq: ['GA','GA','←+PA'],                 note: '3 hits' },
      { name: 'Combo 4', seq: ['GA','GA','GB','←+PA'],            note: '4 hits' },
      { name: 'Combo 5', seq: ['GA','GA','PB','PA','←+PA'],       note: '5 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['←','←','↓','←','+','CR'],  note: 'A 2 pasos',  gif: 'subzero_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['BL','BL','CR','BL','CR'],   note: 'Pegado',      gif: 'subzero_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['←','↓','→','→','+','PA'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','PB','PA','GB','GA','PA','PA','GA','GA','GB','GA'] , gif: 'subzero_brutality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['PB','CR','CR','+','↑'],        note: 'No bloquear' , gif: 'subzero_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','←','←','+','PA'],      note: 'No bloquear' , gif: 'subzero_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],           note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SUB-ZERO ENMASCARADO (Classic)
  // ══════════════════════════════════════════════
  {
    id: 'classicsubzero', name: 'Sub-Zero Enmascarado', emoji: '🧊',
    type: 'Guerrero Lin Kuei — Original',
    desc: 'El hermano mayor. Asesinado por Scorpion. Regresa como espectro con poderes únicos distintos al Sub-Zero actual.',
    sprite: 'assets/sprites/classicsubzero.gif',
    specials: [
      { name: 'Ice Blast', seq: ['↓','→','+','GB'],                                   gif: 'classicsz_blast.gif' },
      { name: 'Ice Front',  seq: ['↓','←','+','PB'],                                  gif: 'classicsz_front.gif' },
      { name: 'Slide',      seq: ['←','+','BL+GB/PB'],                                gif: 'classicsz_slide.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['GA','GA','↓+GB','↓+GA'],         note: '4 hits' },
      { name: 'Combo 2', seq: ['PB','←+PA','→+PB'],              note: '3 hits' },
      { name: 'Combo 3', seq: ['GA','GA','PB','←+PA','→+PB'],    note: '5 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1', seq: ['↓','↓','↓','→','+','GA'],    note: 'Pegado',       gif: 'classicsz_fatality1.gif' },
      { name: 'Babality',   seq: ['↓','←','←','PA'],             note: 'Arcade — No bloquear' },
      { name: 'Friendship', seq: ['PA','CR','CR','↑'],            note: 'Arcade — Pegado' },
      { name: 'Stage Fatality', seq: ['→','↓','→','→','+','GA'] },
    ],
    extras: [
      { type: 'brutality', name: 'Brutality', seq: ['GA','GB','GA','BL','PB','PB','PA','PA','PA','GB','GA','GB'] , gif: 'classicsz_brutality.gif' },
      { type: 'mercy',     name: 'Mercy',     seq: ['CR','CR','CR','PB'], note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  SHEEVA
  // ══════════════════════════════════════════════
  {
    id: 'sheeva', name: 'Sheeva', emoji: '🟣',
    type: 'Guardia Shokan',
    desc: 'Shokan de cuatro brazos. Guardiana personal de Sindel. Fuerza bruta incomparable. No disponible en SNES ni Megadrive.',
    sprite: 'assets/sprites/sheeva.gif',
    specials: [
      { name: 'Teleport Stomp', seq: ['↓','↑'],                                       gif: 'sheeva_stomp.gif' },
      { name: 'Ground Stomp',   seq: ['←','↓','←','+','PA'],                          gif: 'sheeva_ground_stomp.gif' },
      { name: 'Fireball',       seq: ['↓','→','+','GA'],                              gif: 'sheeva_fireball.gif' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','PA','PB','←+PA'],           note: '4 hits' },
      { name: 'Combo 2', seq: ['GA','GA','GB','→+GA'],           note: '4 hits' },
      { name: 'Combo 3', seq: ['GA','GA','GB','PA','PA','PB','←+PA'], note: '7 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1',     seq: ['→','↓','↓','→','GB'],                          note: 'Pegado',  gif: 'sheeva_fatality1.gif' },
      { name: 'Fatality 2',     seq: ['(hold PA)','←','→','→','(soltar PA)'],          note: 'Pegado',  gif: 'sheeva_fatality2.gif' },
      { name: 'Stage Fatality', seq: ['↓','→','↓','→','GB'] },
    ],
    extras: [
      { type: 'animality',  name: 'Animality',   seq: ['CR','CR','CR','BL'],           note: 'Pegado — tras Mercy' , gif: 'sheeva_animality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['→','→','↓','→','+','GA'],      note: 'No bloquear' , gif: 'sheeva_friendship.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['↓','↓','↓','←','+','PA'],      note: 'No bloquear' , gif: 'sheeva_babality.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],           note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  HUMAN SMOKE (personaje oculto)
  // ══════════════════════════════════════════════
  {
    id: 'humansmoke', name: 'Human Smoke', emoji: '🥷',
    type: 'Ninja Oculto',
    desc: 'Versión humana de Smoke. Personaje oculto. Para usarlo: elegir Smoke y mantener ← + GA + PA + BL + CR al inicio del combate.',
    sprite: 'assets/sprites/humansmoke.gif',
    specials: [
      { name: 'Spear',          seq: ['←','←','+','GB'],                              gif: 'hsmoke_spear.gif' },
      { name: 'Teleport Punch', seq: ['↓','←','+','GA'],  note: 'También en el aire', gif: 'hsmoke_teleport.gif' },
      { name: 'Air Throw',      seq: ['BL'],              note: 'Pegado al rival en el aire' },
    ],
    combos: [
      { name: 'Combo 1', seq: ['PA','PA','PB','PB'],      note: '4 hits' },
      { name: 'Combo 2', seq: ['GA','GA','PA','←+PA'],    note: '4 hits' },
      { name: 'Combo 3', seq: ['GA','GA','↑+GB'],         note: '3 hits' },
    ],
    fatalities: [
      { name: 'Fatality 1 (Arcade)', seq: ['→','→','←','CR'],        note: 'Distancia de barrido', gif: 'hsmoke_fatality1.gif' },
      { name: 'Stage Fatality',      seq: ['→','↑','↑','GB'] },
    ],
    extras: [
      { type: 'brutality',  name: 'Brutality',   seq: ['GA','PB','PB','PA','BL','BL','GB','GB','GA','GA','BL'] , gif: 'hsmoke_brutality.gif' },
      { type: 'babality',   name: 'Babality',    seq: ['←','←','→','CR'],            note: 'Arcade — No bloquear' , gif: 'hsmoke_babality.gif' },
      { type: 'friendship', name: 'Friendship',  seq: ['↓','→','→','→','CR'],        note: 'Arcade — No bloquear' , gif: 'hsmoke_friendship.gif' },
      { type: 'mercy',      name: 'Mercy',       seq: ['CR','CR','CR','PB'],         note: 'Desde distancia media' },
    ],
  },

  // ══════════════════════════════════════════════
  //  MOTARO (personaje oculto)
  // ══════════════════════════════════════════════
  {
    id: 'motaro', name: 'Motaro', emoji: '🐴',
    type: 'Sub-Boss — Centauro',
    boss: true,
    desc: 'Poderoso centauro guardián de Shao Kahn. Resistente a todos los proyectiles. Personaje oculto.',
    sprite: 'assets/sprites/motaro.gif',
    specials: [
      { name: 'Fireball', seq: ['↓','←','+','GA'],                                    gif: 'motaro_fireball.gif' },
      { name: 'Catch',    seq: ['→','→','+','GB'],                                    gif: 'motaro_catch.gif' },
      { name: 'Teleport', seq: ['↓','↑'],                                              gif: 'motaro_teleport.gif' },
    ],
    combos: [],
    fatalities: [],
    extras: [],
  },

  // ══════════════════════════════════════════════
  //  SHAO KAHN (personaje oculto)
  // ══════════════════════════════════════════════
  {
    id: 'shaokahn', name: 'Shao Kahn', emoji: '👑',
    type: 'Boss Final — Emperador del Outworld',
    boss: true,
    desc: 'El Emperador del Outworld. El villano definitivo de Mortal Kombat. Puede recuperar vida con su taunt.',
    sprite: 'assets/sprites/shaokahn.gif',
    specials: [
      { name: 'Fireball',     seq: ['←','←','→','+','GB'],                            gif: 'kahn_fireball.gif' },
      { name: 'Dash',         seq: ['→','→','+','GB'],                                gif: 'kahn_dash.gif' },
      { name: 'Uppercut Dash',seq: ['→','→','+','GA'],                                gif: 'kahn_uppercut.gif' },
      { name: 'Hammer',       seq: ['←','→','+','GA'],                                gif: 'kahn_hammer.gif' },
      { name: 'Laugh (taunt)',seq: ['↓','↓','+','PA'],   note: 'Recupera vida' },
      { name: 'Taunt',        seq: ['↓','↓','+','PB'] },
    ],
    combos: [],
    fatalities: [],
    extras: [],
  },

];


// ============================================================
//  TRUCOS Y SECRETOS
// ============================================================

const SECRETS = [

  {
    id: 'general',
    title: 'Todas las versiones',
    icon: '🎮',
    items: [
      { name: 'Selección aleatoria de personaje', desc: 'En la pantalla de selección, presionar Arriba + Start sobre el personaje inicial.' },
      { name: 'Cómo hacer el Mercy', desc: 'Perder un round y ganar dos. Cuando diga "Finish Him/Her", mantener CR y presionar Abajo tres veces, luego soltar CR. Hacerlo desde lejos.' },
      { name: 'Cómo hacer el Animality', desc: 'Primero hay que hacer el Mercy en ese round. Solo entonces el Animality estará disponible.' },
      { name: 'Friendships y Babalities', desc: 'Se pueden hacer a cualquier distancia. Condición: NO presionar Bloqueo en el último round.' },
      { name: 'Stage Fatalities', desc: 'Solo funcionan en los escenarios: The Pit 3, Subway, Belltower y Scorpion\'s Hell.' },
      { name: 'Jugar a Galaxian', desc: 'Jugar 100 partidas de 2 jugadores o ingresarlo mediante los Kombat Kodes.' },
    ],
  },

  {
    id: 'arcade',
    title: 'Arcade',
    icon: '🕹️',
    items: [
      { name: 'Jugar como Ermac', desc: 'Cuando pierdes contra la CPU e ingresa "Kombat Kode": 12344-44321. J1: GA, GB×2, BL×3, PB×4, PA×4 — J2: GA×4, GB×4, BL×3, PB×2, PA.' },
      { name: 'Jugar como Mileena', desc: 'Kombat Kode: 22264-22264. J1 y J2: GA×2, GB×2, BL×2, PB×6, PA×4.' },
      { name: 'Jugar como Sub-Zero Enmascarado', desc: 'Kombat Kode: 81835-81835. J1 y J2: GA×8, GB, BL×8, PB×3, PA×5.' },
    ],
  },

  {
    id: 'snes',
    title: 'Super Nintendo (SNES)',
    icon: '🟥',
    items: [
      { name: 'Jugar como Human Smoke', desc: 'Elegir Smoke. Mantener Izquierda + GA + PA + BL + CR hasta que empiece el kombate.' },
      { name: 'Menú Kool Stuff', desc: 'En pantalla de inicio: Derecha, Arriba, B, B, A, Abajo, Arriba, B, Abajo, Arriba, B.' },
      { name: 'Menú Kooler Stuff', desc: 'En pantalla de inicio: Arriba, B, A, Izquierda, Abajo, Y.' },
      { name: "Menú Scott's Stuff", desc: 'En pantalla de inicio: B, A, Abajo, Abajo, Izquierda, A, X, B, A, B, Y.' },
      { name: 'Sound Test', desc: 'En pantalla de inicio: Izquierda, Abajo, Y, Y.' },
    ],
  },

  {
    id: 'saturn',
    title: 'Sega Saturn',
    icon: '⭕',
    items: [
      { name: 'Modo Freeplay', desc: 'En pantalla de título: Arriba, Arriba, Derecha, Derecha, Izquierda, Izquierda, Abajo, Abajo.' },
      { name: 'Menú Lots of Stuff', desc: 'En pantalla de título: C, R, A, Z, Y, C, Y, R, A, X. Luego Arriba cuando el cubo esté en "kombat".' },
      { name: 'Jugar como Human Smoke', desc: 'Seleccionar Cyber-Smoke y mantener L + HP + B + HK + R.' },
      { name: 'Jugar como Ermac', desc: 'En pantalla Ultimate Kombat Kode: X×9, Y×6, Z×4, A×2, B×4.' },
      { name: 'Jugar como Mileena', desc: 'En pantalla Ultimate Kombat Kode: X×7, A×7, B×2, C×3.' },
      { name: 'Jugar como Sub-Zero Enmascarado', desc: 'En pantalla de selección: X×7, Y×6, A×5, B×2.' },
    ],
  },

  {
    id: 'megadrive',
    title: 'Sega Megadrive',
    icon: '🔵',
    items: [
      { name: 'Cheat Mode', desc: 'En pantalla de título: B, A, Abajo, Izquierda, A, Abajo, C, Derecha, Arriba, Abajo. Aparecerán Trucos, Secretos y Kodes en el menú principal.' },
      { name: 'Jugar como Human Smoke', desc: 'Elegir Smoke robot y mantener Atrás + GA + GB + PA + PB hasta que empiece el combate.' },
      { name: 'Pierde con estilo', desc: 'Conectar segundo mando y jugar en un jugador. Al perder, mantener Abajo en ambos mandos para que el rival te haga Fatality.' },
      { name: 'Puppet Show (Liu Kang)', desc: 'Al final del segundo round: Abajo, CR, Abajo, CR, Abajo, CR. Requiere mando de 6 botones.' },
      { name: 'Saltar de escenario', desc: 'Pulsar Start en el mando 2 al terminar la primera ronda para avanzar al siguiente oponente.' },
      { name: '8 vidas en Galaxian', desc: 'Activar el menú de trucos y elegir "jugar al juego oculto". Durante la intro mantener X + A + Z + C. Funciona si se oye un sonido de disparo sin ver láser.' },
    ],
  },

  {
    id: 'kombatkodes',
    title: 'Kombat Kodes (2 jugadores)',
    icon: '🔢',
    desc: 'Los códigos se ingresan en la pantalla "VS" del modo 2 jugadores. Los 3 primeros números son del J1 y los 3 últimos del J2. Cada dígito equivale a presiones del botón: GB=1er dígito, BL=2do, PB=3er.',
    items: [
      { name: '033-564', desc: 'El ganador pelea contra Shao Kahn.' },
      { name: '205-205', desc: 'El ganador pelea contra Smoke.' },
      { name: '969-141', desc: 'El ganador pelea contra Motaro.' },
      { name: '033-000', desc: 'Jugador 1 con energía infinita.' },
      { name: '000-033', desc: 'Jugador 2 con energía infinita.' },
      { name: '707-000', desc: 'Jugador 1 con energía infinita (alternativo).' },
      { name: '000-707', desc: 'Jugador 2 con energía infinita (alternativo).' },
      { name: '044-440', desc: 'Sin energía para ninguno.' },
      { name: '466-466', desc: 'Correr ilimitado.' },
      { name: '688-422', desc: 'Pelea a oscuras.' },
      { name: '020-020', desc: 'Bloqueo desactivado.' },
      { name: '100-100', desc: 'Arrojar desactivado.' },
      { name: '444-444', desc: 'Los luchadores cambian al azar.' },
      { name: '642-468', desc: 'Juego de naves (Galaxian).' },
      { name: '985-125', desc: 'Luchadores cambian al azar a oscuras.' },
      { name: '688-688', desc: 'Uppercut más rápido.' },
      { name: '987-123', desc: 'Barras de energía invisibles.' },
      { name: '303-606', desc: 'Juego de ping-pong.' },
      { name: '955-955', desc: 'Más tiempo para hacer Fatality.' },
      { name: '010-010', desc: 'Arrojar enfurecido.' },
      { name: '911-911', desc: 'La CPU desactiva la mayoría de los botones en el 2do round.' },
      { name: '999-995', desc: 'Combos desactivados.' },
      { name: '011-971', desc: 'Recuperación de energía.' },
      { name: '494-494', desc: 'Tiempo super rápido.' },
      { name: '091-293', desc: 'Barridas desactivadas.' },
      { name: '082-771', desc: 'Barrida y arrojar desactivados.' },
      { name: '122-333', desc: 'Biografía del personaje.' },
      { name: '460-460', desc: 'Los luchadores cambian al azar.' },
    ],
  },

];

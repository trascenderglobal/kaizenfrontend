export default {
  languages: {
    en: 'Inglés',
    es: 'Español',
  },
  login: {
    login: 'Login',
    subtitle: '¡Te estamos buscando!',
    email: 'Tu e-mail',
    password: 'Contraseña',
    register: 'Registrarse',
    forgot: 'Recuperar contraseña',
    verifyEmail: 'Se ha enviado un e-mail para verifica tu cuenta',
    resendEmail: 'Reenviar e-mail de verificación',
    accountVerified: '¡Tu cuenta ha sido verificada!',
    error: {
      title: 'No se pudo iniciar sesión',
      text: 'Inténtalo de nuevo.',
      unverifiedEmail: 'Tu e-mail no ha sido verificado',
      unknownError: 'Algo salió mal',
      serverError: 'Hay un error de nuestro lado',
    },
    meta: {
      title: 'Login',
      description: 'Login',
    },
  },
  signup: {
    signup: 'Sign up',
    name: 'Nombre',
    lastname: 'Apellido',
    email: 'e-mail',
    password: 'Contraseña',
    confirmPassword: 'Confirma tu contraseña',
    iam: 'Soy un(a)',
    employee: 'Empleado(a)',
    employer: 'Empleador',
    haveAccount: '¿Tienes una cuenta?',
    login: 'Login',
    error: {
      title: 'No se pudo registrate',
      text: 'Please try again.',
    },
    meta: {
      title: 'Sign up',
      description: 'Sign up',
    },
  },
  resendEmail: {
    title: 'Reenviar correo de verificación',
    subtitle:
      'Se enviará un enlace a tu dirección de correo electrónico para verificarlo',
    email: 'Tu e-mail',
    backToLogin: 'Volver a Login',
    submit: 'Reenviar',
    sent: {
      title: '¡E-mail enviado!',
      text: 'Se ha enviado un correo electrónico con un enlace para verificar tu cuenta',
    },
    error: {
      title: 'No se pudo enviar el correo electrónico',
      text: 'Asegúrate de que el correo electrónico que ingresaste esté vinculado a una cuenta',
    },
    meta: {
      title: 'Reenviar e-mail',
      description: 'Reenviar e-mail',
    },
  },
  forgotPassword: {
    recover: 'Recuperar',
    subtitle:
      'Se enviará un enlace a tu dirección de correo electrónico para restablecer tu contraseña',
    fill: 'Por favor, diligencia los siguientes campos',
    email: 'Tu e-mail',
    newPassword: 'Ingresa una nueva contraseña',
    confirmPassword: 'Confirma tu contraseña',
    backToLogin: 'Volver a Login',
    submit: 'Enviar',
    sent: {
      title: '¡E-mail enviado!',
      text: 'Se ha enviado un correo electrónico con un enlace para restablecer tu contraseña.',
    },
    error: {
      title: 'No se pudo enviar el correo electrónico',
      text: 'Asegúrate de que el correo electrónico que ingresaste esté vinculado a una cuenta',
      titleReset: 'No se pudo restaurar tu contraseña',
    },
    meta: {
      title: 'Recuperar contraseña',
      description: 'Recuperar contraseña',
    },
  },
  drawer: {
    profile: 'Perfil',
    resume: 'Experiencia',
    jobs: 'Trabajos',
    settings: 'Configuración',
    search: 'Buscar',
    requests: 'Solicitudes',
    deals: 'Tratos',
    users: 'Usuarios',
    logout: 'Cerrar sesión',
    negotiation: 'Negociación',
  },
  breadcrumb: {
    profile: 'Perfil',
    resume: 'Experiencia',
    jobs: 'Trabajos',
    settings: 'Configuración',
    search: 'Buscar',
    detail: 'Detalles del perfil',
    negotiation: 'Negociación',
    requests: 'Solicitudes',
    deals: 'Tratos',
    users: 'Usuarios',
  },
  userInfo: {
    admin: 'Administrador',
  },
  alerts: {
    alerts: 'Alertas',
    newAlerts: 'Tienes nuevas alertas. Algunos empleadores te están buscando.',
    seeAll: 'Ver todo',
    noAlerts: 'No hay alertas',
  },
  notifier: {
    dismiss: 'Descartar',
  },
  approved: {
    approved: 'Tratos aprobados',
    alerts: 'El nuevo talento de tu empresa te está esperando',
    seeAll: 'Ver todo',
    noApproved: 'No hay solicitudes aprobadas',
  },
  select: {
    noItems: 'Sin artículos',
  },
  datepicker: {
    lang: {
      formatLocale: {
        // MMM
        monthsShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic',
        ],
        // dd
        weekdaysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        // first day of week
        firstDayOfWeek: 0,
        // first week contains January 1st.
        firstWeekContainsDate: 1,
      },
    },
  },
  forms: {
    errors: {
      email: 'E-mail inválido',
      required: 'Requerido',
      minLength: 'Debe tener al menos {length} caracteres',
      sameAsPassword: 'Las contraseñas no coinciden',
      url: 'URL inválida',
    },
  },
  profile: {
    myProfile: 'Mi perfil',
    userImage: 'Foto de perfil',
    contactInfo: 'Información de Contacto',
    editProfile: 'Editar perfil',
    novelties: 'Novedades',
    status: 'Estado',
    statuses: {
      available: 'Disponible',
      busy: 'Ocupado',
    },
    industries: {
      manufacturing: 'Manufactura',
    },
    state: 'Estado',
    companyName: 'Nombre de empresa',
    position: 'Cargo',
    contactPerson: 'Persona de contacto',
    city: 'Ciudad',
    zip: 'Zip',
    address: 'Dirección',
    phone: 'Teléfono',
    email: 'E-mail',
    social: 'Social',
    noBirth: 'Sin fecha de nacimiento',
    noSkills: 'Sin habilidades asociadas',
    noIndustry: 'Sin sector asociado',
    notSet: 'No establecido',
    edit: {
      addImage: 'Agrega tu foto de perfil',
      typeRole: 'Escribe tu rol',
      typeZip: 'Escribe tu zip',
      enterIndustry: 'Selecciona tu sector',
      birthDate: 'Fecha de nacimiento',
      select: 'Seleccionar',
      phone: 'Escribe un número de teléfono',
      email: 'Tu mejor e-mail',
      linkedin: 'Tu perfil de LinkedIn',
      save: 'Guardar',
      saved: {
        title: 'Cambios guardados',
        text: 'Los cambios en tu perfil han sido guardados',
        btn: '¡Increíble!',
      },
    },
    meta: {
      title: 'Perfil',
      description: 'Perfil',
    },
  },
  resume: {
    myResume: 'Mi experiencia',
    mainSkills: 'Habilidades principales',
    selectSkill: 'Selecciona una habilidad',
    skills: {
      0: 'Pegado',
      1: 'Montaje',
      2: 'Costura',
      3: 'Corte',
      4: 'Tapicería',
      5: 'Embalaje',
      6: 'Soldadura MIG',
      7: 'Soldadura TIG',
      8: 'Soldadura MIG y TIG',
      9: 'Trabajo general',
    },
    yearsExperience: 'Años de experiencia',
    years: 'Años',
    year: '{count} año | {count} años',
    secondarySkills: 'Habilidades secundarias',
    secondaryLanguage: 'Segundo idioma',
    selectLanguage: 'Selecciona un idioma',
    language: 'Idioma',
    level: 'Nivel',
    levels: {
      0: 'Principiante',
      1: 'Intermedio',
      2: 'Avanzado',
      3: 'Experto',
    },
    previousJob: 'Experiencia previa',
    companyName: 'Nombre de la compañía',
    from: 'Desde',
    to: 'Hasta',
    typePosition: 'Ingresa un cargo',
    contactPerson: 'Persona de contacto',
    phone: 'Teléfono',
    removeJob: 'Remover empleo',
    addMoreExperience: 'Ingresa más experiencia',
    save: 'Guardar',
    saved: {
      title: 'Cambios guardados',
      text: 'Los cambios en tu experiencia han sido guardados',
      btn: '¡Increíble!',
    },
    meta: {
      title: 'Experiencia',
      description: 'Experiencia',
    },
  },
  deals: {
    meta: {
      title: 'Tratos',
      description: 'Tratos',
    },
    deals: 'Tratos',
    header: 'Filtra por aprobado, rechazado o aprobado parcialmente',
    approved: 'Aprobado',
    rejected: 'Rechazado',
    partiallyApproved: 'Aprobado parcialmente',
    showBy: 'Filtrar por',
    table: {
      position: 'Posición',
      date: 'Fecha',
      status: 'Status',
      details: 'Detalles',
      from: 'Desde',
      to: 'Hasta',
      talent: 'Talent',
      typeContract: 'Tipo de contrato',
      salaryRate: 'Tasa de salario',
      noItems: 'No hay tratos',
    },
    previous: 'Anterior',
    next: 'Siguiente',
  },
  requests: {
    meta: {
      title: 'Solicitudes',
      description: 'Solicitudes',
    },
    requests: 'Solicitudes',
    header: 'Filtra tus solicitudes en proceso o canceladas',
    showBy: 'Filtrar por',
    recent: 'Reciente',
    inProcess: 'En proceso',
    canceled: 'Cancelado',
    requestSent: '¡Solicitud enviada!',
    requestCanceled: '¡Solicitud cancelada!',
    table: {
      loading: 'Cargando',
      noItems: 'No hay solicitudes',
      position: 'Posición',
      date: 'Fecha',
      actions: 'Acciones',
      status: 'Estado',
      details: 'Detalles',
      from: 'Desde',
      to: 'Hasta',
      typeOfContract: 'Tipo de contrato',
      salaryRate: 'Tasa de salario',
      rate: '{salary} USD por hora',
      talent: 'Talento',
    },
    cancelModal: {
      title: '¿Estás seguro de que deseas cancelar esta solicitud?',
      subtitle: 'Puedes enviarlo de nuevo para su revisión más tarde',
    },
    send: 'Enviar solicitud',
    pending: 'Solicitud pendiente',
    cancel: 'Cancelar solicitud',
    close: 'Cerrar',
    previous: 'Anterior',
    next: 'Siguiente',
    page: 'Page {p} of {t}',
  },
  search: {
    meta: {
      title: 'Buscar',
      description: 'Buscar',
    },
    title: 'Búsqueda',
    subtitle: 'Selecciona tus preferencias para continuar',
    experience: {
      experience: 'Años de experiencia',
      option1: '1 año/menos',
      option2: '1 - 3 años',
      option3: '3 años/más',
    },
    selectSkill: 'Selecciona una habilidad',
    addSkill: 'Añadir habilidad',
    searchButton: 'Buscar',
    addFilter: 'Añadir filtros',
    removeFilter: 'Remover filtro',
    addFilterDescription: 'Agrega filtros para una búsqueda más precisa',
    filtersApplied: '¡Filtros aplicados!',
    city: 'Ciudad',
    state: 'Estado',
    language: {
      language: 'Idioma',
      es: 'Español',
      en: 'Inglés',
      levels: {
        0: 'Principiante',
        1: 'Intermedio',
        2: 'Advanzado',
        3: 'Experto',
      },
    },
    apply: 'Aplicar',
    noResults: 'Tu búsqueda no arrojó resultados',
  },
  results: {
    results: 'Resultados',
    subtitle:
      'La búsqueda ha encontrado {resultsLength} perfiles que cumplen con tus criterios',
    previous: 'Anterior',
    next: 'Siguiente',
    request: 'Solicitar',
    table: {
      name: 'Nombre',
      position: 'Cargo',
      profile: 'Perfil',
      request: 'Solicitar',
      view: 'Ver',
    },
    page: 'Página {p} de {t}',
  },
  negotiation: {
    negotiation: 'Negociación',
    typeOfN: 'Tipo de negociación',
    from: 'Desde',
    to: 'Hasta',
    position: 'Cargo',
    typeOfC: 'Tipo de contrato',
    contracts: {
      0: 'Contrato laboral',
      1: 'Contratación directa',
    },
    selectContract: 'Selecciona el tipo de contrato',
    salaryRate: 'Tasa de salario',
    perHour: '{value} USD por hora',
    jobDescription: 'Descripción del trabajo',
    observation: 'Observaciones',
    buttons: {
      cancel: 'Cancelar',
      next: 'Siguiente',
      previous: 'Anterior',
      request: 'Solicitar',
      seeDeals: 'Ver tus ofertas',
    },
    requestsCompleted: {
      title: 'Solicitud completa',
      paragraph1:
        'Kaizen ha sido notificado que has solicitado talento para tu empresa.',
      paragraph2: 'Nuestro equipo te contactará pronto.',
      btn: 'Revisa tus solicitudes',
    },
    page: 'Perfil {p} de {t}',
    invalidFields: 'Hay campos inválidos',
    meta: {
      title: 'Negociación',
      description: 'Negociación',
    },
  },
  detail: {
    meta: {
      title: 'Detalles del perfil',
      description: 'Detalles del perfil',
    },
    title: 'Detalles del perfil',
    subtitle: 'Verifica que el perfil se ajuste a tus necesidades',
    request: 'Solicitar',
    unknownStatus: 'Desconocido',
    none: 'Ninguna',
    skills: 'Habilidades',
    primary: 'Principal',
    secondary: 'Secundaria',
    company: 'Compañía',
    position: 'Posición',
    activeFrom: 'Activo desde',
    to: 'Hasta',
    contactPerson: 'Persona de contacto',
    phone: 'Teléfono',
  },
  jobs: {
    title: '¿Quién te busca?',
    subtitle: 'Estas empresas te están buscando',
    showBy: 'Filtrar por',
    page: 'Página {p} de {t}',
    previous: 'Anterior',
    next: 'Siguiente',
    approved: 'Aprobado',
    rejected: 'Rechazado',
    table: {
      company: 'Compañía',
      position: 'Posición',
      date: 'Fecha Inicio',
      noItems: 'No hay trabajos',
    },
    meta: {
      title: 'Trabajos',
      description: 'Trabajos',
    },
  },
  settings: {
    settings: 'Configuración',
    header: 'Información de la cuenta',
    account: 'Cuenta',
    accountCreatedOn: 'Tu cuenta fue creada el:',
    language: 'Idioma',
    subscription: 'Suscripción',
    proPlan: 'Pro plan',
    payment: 'Pago',
    paymentMethod: 'Método de pago',
    renew: 'Debes renovar tu suscripción el',
    changePayment: 'Cambiar método de pago',
    unsubscribe: 'Cancelar suscripción',
    ifUnsubscribe:
      'Si cancelas tu suscripción todos tus datos serán borrados, ¿estás seguro?',
    noDate: 'Sin datos',
    deleteAccount: 'Darte de baja',
    deleteLeave: 'Estás por dejarnos',
    deleteSure: '¿Estás seguro?',
    deleteLeaveSure: 'Estás por dejarnos, ¿estás seguro?',
    deleteMyAccount: 'Darme de baja',
    cancel: 'Cancelar',
    delete: 'Confirmar',
    meta: {
      title: 'Configuración',
      description: 'Configuración',
    },
  },
  adminDeals: {
    title: 'Tratos',
    subtitle: 'Filtra por aprobado, activo or rechazado',
    showBy: 'Filtrar por',
    approved: 'Aprobados',
    active: 'Activos',
    rejected: 'Rechazados',
    table: {
      company: 'Compañía',
      date: 'Fecha',
      talent: 'Talento',
      deal: 'Trato',
      status: 'Estado',
      view: 'Ver',
      actions: 'Acciones',
      noItems: 'No hay tratos',
      approved: 'Trato aprobado',
      partiallyApproved: 'Trato aprobado parcialmente',
      pending: 'Trato pendiente',
      rejected: 'Trato rechazado',
    },
    previous: 'Anterior',
    next: 'Siguiente',
    page: 'Página {p} de {t}',
    meta: {
      title: 'Tratos',
      description: 'Tratos',
    },
  },
  adminDetail: {
    title: 'Detalles del trato',
    approve: 'Aprobar',
    reject: 'Rechazar',
    approved: 'Aprobado',
    rejected: 'Rechazado',
    typeOfNegotiation: 'Tipo de negociación',
    position: 'Posición',
    from: 'Desde',
    to: 'Hasta',
    typeOfContract: 'Tipo de contrato',
    salaryRate: 'Tasa de salario',
    perHour: '{rate} USD por hora',
    jobDescription: 'Descripción del trabajo',
    observation: 'Observación',
    page: '{p} de {t} perfiles',
    previous: 'Anterior',
    next: 'Siguiente',
    dealUpdated: 'Trato actualizado!',
    meta: {
      title: 'Detalles del trato',
      description: 'Detalles del trato',
    },
  },
  adminUsers: {
    title: 'Usuarios',
    subtitle: 'Busca los usuarios en Kaizen Squad',
    searchBy: 'Buscar por',
    status: 'Estado',
    active: 'Activo',
    inactive: 'Inactivo',
    employer: 'Empleador',
    employee: 'Empleado',
    previous: 'Anterior',
    next: 'Siguiente',
    page: 'Página {p} de {t}',
    table: {
      company: 'Compañía',
      date: 'Fecha',
      plan: 'Plan',
      profile: 'Perfil',
      status: 'Estado',
      noItems: 'No hay usuarios',
    },
    meta: {
      title: 'Usuarios',
      description: 'Usuarios',
    },
  },
  adminAlerts: {
    title: 'Tratos hechos',
    subtitle: 'Estos son los tratos que han sido cerrados exitosamente',
    noDeals: 'No se han cerrado tratos',
  },
}

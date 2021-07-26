export default {
  languages: {
    en: 'English',
    es: 'Spanish',
  },
  login: {
    login: 'Login',
    subtitle: 'We are looking for you!',
    email: 'Your e-mail',
    password: 'Password',
    register: 'Register',
    forgot: 'Forgot Password?',
    verifyEmail: 'An e-mail has been sent to verify your account',
    resendEmail: 'Resend verification e-mail',
    accountVerified: 'Your account has been verified!',
    error: {
      title: 'Could not log you in',
      text: 'Please try again.',
      unverifiedEmail: 'Your e-mail has not been verified',
      unknownError: 'Something went wrong',
      serverError: 'There is an error on our side',
    },
    meta: {
      title: 'Login',
      description: 'Login',
    },
  },
  signup: {
    signup: 'Sign Up',
    name: 'Name',
    lastname: 'Last name',
    email: 'e-mail',
    password: 'Password',
    confirmPassword: 'Confirm your password',
    iam: 'I am an',
    employee: 'Employee',
    employer: 'Employer',
    haveAccount: 'Have an account?',
    login: 'Login',
    error: {
      title: 'Could not sign you up',
      text: 'Please try again.',
    },
    meta: {
      title: 'Sign Up',
      description: 'Sign Up',
    },
  },
  resendEmail: {
    title: 'Resend verification e-mail',
    subtitle: 'A link will be sent to your email address to verify it',
    email: 'Your e-mail',
    backToLogin: 'Back to Login',
    submit: 'Resend',
    sent: {
      title: 'E-mail sent!',
      text: 'An e-mail has been sent with a link to verify your account',
    },
    error: {
      title: 'Could not send the e-mail',
      text: 'Make sure the e-mail you entered is linked to an account',
    },
    meta: {
      title: 'Resend e-mail',
      description: 'Resend e-mail',
    },
  },
  forgotPassword: {
    recover: 'Recover',
    subtitle:
      'A link will be sent to your email address to reset your password',
    fill: 'Please, fill the following fields',
    email: 'Your e-mail',
    newPassword: 'Type a new password',
    confirmPassword: 'Confirm your password',
    backToLogin: 'Back to Login',
    submit: 'Submit',
    sent: {
      title: 'E-mail sent!',
      text: 'An e-mail has been sent with a link to reset your password',
    },
    error: {
      title: 'Could not send the e-mail',
      text: 'Make sure the e-mail you entered is linked to an account',
      titleReset: 'Could not reset your password',
    },
    meta: {
      title: 'Recover Password',
      description: 'Recover Password',
    },
  },
  drawer: {
    profile: 'Profile',
    resume: 'Resume',
    jobs: 'Jobs',
    settings: 'Settings',
    search: 'Search',
    requests: 'Requests',
    deals: 'Deals',
    personnel: 'Personnel',
    logout: 'Log out',
    negotiation: 'Negotiation',
  },
  breadcrumb: {
    profile: 'Profile',
    resume: 'Resume',
    jobs: 'Jobs',
    settings: 'Settings',
    search: 'Search',
    detail: 'Profile detail',
    negotiation: 'Negotiation',
    requests: 'Requests',
    deals: 'Deals',
    personnel: 'Personnel',
  },
  userInfo: {
    admin: 'Administrator',
  },
  alerts: {
    alerts: 'Alerts',
    newAlerts: 'You have new alerts. Some employers are looking for you.',
    seeAll: 'See all',
    noAlerts: 'There are no alerts',
  },
  notifier: {
    dismiss: 'Dismiss',
  },
  approved: {
    approved: 'Approved',
    alerts: 'The new talent of your company is waiting for you',
    seeAll: 'See all requests',
    noApproved: 'There are no approved requests',
  },
  select: {
    noItems: 'No items',
  },
  datepicker: {
    lang: {
      formatLocale: {
        // MMM
        monthsShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        // dd
        weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        // first day of week
        firstDayOfWeek: 0,
        // first week contains January 1st.
        firstWeekContainsDate: 1,
      },
    },
  },
  forms: {
    errors: {
      email: 'Invalid e-mail',
      required: 'Required',
      minLength: 'Must be at least {length} characters long',
      sameAsPassword: 'The passwords do not match',
      url: 'Invalid URL',
    },
  },
  profile: {
    myProfile: 'My profile',
    userImage: 'Profile picture',
    contactInfo: 'Contact Information',
    editProfile: 'Edit profile',
    novelties: 'Novelties',
    status: 'Status',
    statuses: {
      available: 'Available',
      busy: 'Busy',
    },
    industries: {
      manufacturing: 'Manufacturing',
    },
    state: 'State',
    position: 'Position',
    contactPerson: 'Contact person',
    city: 'City',
    zip: 'Zip',
    address: 'Address',
    phone: 'Phone',
    email: 'E-mail',
    social: 'Social',
    noBirth: 'No date of birth',
    noSkills: 'No skills associated',
    noIndustry: 'No industry associated',
    notSet: 'Not set',
    edit: {
      addImage: 'Add your profile picture',
      typeRole: 'Type your role',
      typeZip: 'Type your zip',
      enterIndustry: 'Select your industry',
      birthDate: 'Birth date',
      select: 'Select',
      phone: 'Type a phone number',
      email: 'Your best e-mail',
      linkedin: 'Your LinkedIn profile',
      save: 'Save',
      saved: {
        title: 'Changes Saved',
        text: 'The changes to your profile have been saved correctly',
        btn: 'Amazing!',
      },
    },
    meta: {
      title: 'Profile',
      description: 'Profile',
    },
  },
  resume: {
    myResume: 'My resume',
    mainSkills: 'Main skills',
    selectSkill: 'Select a skill',
    skills: {
      0: 'Glueing',
      1: 'Assembly',
      2: 'Sewing',
      3: 'Cutting',
      4: 'Upholstery',
      5: 'Packaging',
      6: 'MIG Welding',
      7: 'TIG Welding',
      8: 'MIG & TIG Welding',
      9: 'General Labor',
    },
    yearsExperience: 'Years of experience',
    years: 'Years',
    year: '{count} year | {count} years',
    secondarySkills: 'Secondary skills',
    secondaryLanguage: 'Secondary language',
    selectLanguage: 'Select a language',
    language: 'Language',
    level: 'Level',
    levels: {
      0: 'Beginner',
      1: 'Intermediate',
      2: 'Advanced',
      3: 'Proficient',
    },
    previousJob: 'Previous jobs',
    companyName: 'Company name',
    from: 'From',
    to: 'To',
    typePosition: 'Type a position',
    contactPerson: 'Contact person',
    phone: 'Phone',
    removeJob: 'Remove job',
    addMoreExperience: 'Add more experience',
    save: 'Save',
    saved: {
      title: 'Changes Saved',
      text: 'The changes to your resume have been saved correctly',
      btn: 'Amazing!',
    },
    meta: {
      title: 'Resume',
      description: 'Resume',
    },
  },
  deals: {
    meta: {
      title: 'Deals',
      description: 'Deals',
    },
    deals: 'Deals',
    header: 'Filter by recent, approved, in process, past or cancelled',
    showBy: 'Show by: ',
    table: {
      searched: 'Searched',
      date: 'Date',
      status: 'Status',
      details: 'Details',
      from: 'From: ',
      to: 'To: ',
      talent: 'Talent: ',
      typeContract: 'Type of contract: ',
      salaryRate: 'Salary rate: ',
    },
    previous: 'Previous',
    next: 'Next',
  },
  requests: {
    meta: {
      title: 'Requests',
      description: 'Requests',
    },
    requests: 'Requests',
    header: 'Filter your requests by recent, in process or canceled',
    showBy: 'Show by',
    recent: 'Recent',
    inProcess: 'In process',
    canceled: 'Canceled',
    requestSent: 'Request sent!',
    requestCanceled: 'Request canceled!',
    table: {
      loading: 'Loading',
      noItems: 'There are no requests',
      position: 'Position',
      date: 'Date',
      actions: 'Actions',
      status: 'Status',
      details: 'Details',
      from: 'From',
      to: 'To',
      typeOfContract: 'Type of contract',
      salaryRate: 'Salary rate',
      rate: 'USD {salary} per hour',
      talent: 'Talent',
    },
    send: 'Send request',
    pending: 'Pending request',
    cancel: 'Cancel request',
    previous: 'Previous',
    next: 'Next',
    page: 'Page {p} of {t}',
  },
  search: {
    meta: {
      title: 'Search',
      description: 'Search',
    },
    title: 'Search',
    subtitle: 'Fill your preferences to continue',
    experience: {
      experience: 'Years of experience',
      option1: '1 year/less',
      option2: '1 - 3 years',
      option3: '3 years/more',
    },
    selectSkill: 'Select a skill',
    addSkill: 'Add a new skill',
    searchButton: 'Search',
    addFilter: 'Add filter',
    removeFilter: 'Remove filter',
    addFilterDescription: 'Add new filters to make your search more accurate',
    city: 'City',
    state: 'State',
    language: {
      language: 'Language',
      es: 'Spanish',
      en: 'English',
      levels: {
        0: 'Beginner',
        1: 'Intermediate',
        2: 'Advanced',
        3: 'Proficient',
      },
    },
    apply: 'Apply',
  },
  results: {
    results: 'Results',
    subtitle:
      'The search has found {resultsLength} profiles that meet the required specifications',
    previous: 'Previous',
    next: 'Next',
    request: 'Request',
    table: {
      name: 'Name',
      position: 'Position',
      profile: 'Profile',
      request: 'Request',
      view: 'View',
    },
    page: 'Page {p} of {t}',
  },
  negotiation: {
    negotiation: 'Negotiation',
    typeOfN: 'Type of negotiation',
    from: 'From',
    to: 'To',
    position: 'Position',
    typeOfC: 'Type of contract',
    contracts: {
      0: 'Contract labor',
      1: 'Direct hired',
    },
    selectContract: 'Select a type of contract',
    salaryRate: 'Salary rate',
    perHour: 'USD {value} per hour',
    jobDescription: 'Job description',
    observation: 'Observation',
    buttons: {
      cancel: 'Cancel',
      next: 'Next',
      seeDeals: 'See your deals',
    },
    requestsCompleted: {
      title: 'Requests completed',
      paragraph1:
        'HR has been notified you requested some talent for your company,',
      paragraph2: 'Our team will be contact you soon.',
    },
    page: '{p} of {t} profiles',
  },
  detail: {
    meta: {
      title: 'Profile detail',
      description: 'Profile detail',
    },
    title: 'Profile detail',
    subtitle: 'Verify that the profile fits your needs',
    request: 'Request',
    unknownStatus: 'Unknown',
    none: 'None',
    skills: 'Skills',
    primary: 'Primary',
    secondary: 'Secondary',
    company: 'Company',
    position: 'Position',
    activeFrom: 'Active from',
    to: 'To',
    contactPerson: 'Contact person',
    phone: 'Phone',
  },
  jobs: {
    meta: {
      title: 'Jobs',
      description: 'Jobs',
    },
  },
  settings: {
    settings: 'Settings',
    header: 'Account information',
    account: 'Account',
    accountCreatedOn: 'Your account was created on:',
    language: 'Language',
    subscription: 'Subscription',
    proPlan: 'Pro plan',
    payment: 'Payment',
    paymentMethod: 'Payment method',
    renew: 'On January 8th, 2022, you need to renew yur subscription.',
    changePayment: 'Change the payment method that suits your preferences.',
    unsubscribe: 'Unsubscribe',
    ifUnsubscribe:
      'If you unsubscribe, all your data will be deleted. Are you sure?',
    noDate: 'No date',
    deleteAccount: 'Delete your account',
    deleteLeave: 'You are about to leave us',
    deleteSure: 'Are you sure?',
    deleteLeaveSure: 'You are about to leave us, are you sure?',
    deleteMyAccount: 'Delete my account',
    cancel: 'Cancel',
    delete: 'Delete',
    meta: {
      title: 'Settings',
      description: 'Settings',
    },
  },
  adminDeals: {
    title: 'Deals',
    subtitle: 'Filter by approved, active or rejected',
    showBy: 'Show by',
    approved: 'Approved',
    active: 'Active',
    rejected: 'Rejected',
    table: {
      company: 'Company',
      date: 'Date',
      talent: 'Talent',
      deal: 'Deal',
      status: 'Status',
      view: 'View',
      actions: 'Actions',
      noItems: 'There are no deals',
      approved: 'Approved request',
      partiallyApproved: 'Partially approved request',
      pending: 'Pending request',
      rejected: 'Rejected request',
    },
    previous: 'Previous',
    next: 'Next',
    page: 'Page {p} of {t}',
    meta: {
      title: 'Deals',
      description: 'Deals',
    },
  },
  adminDetail: {
    title: 'Deal detail',
    approve: 'Approve',
    reject: 'Reject',
    typeOfNegotiation: 'Type of negotiation',
    position: 'Position',
    from: 'From',
    to: 'To',
    typeOfContract: 'Type of contract',
    salaryRate: 'Salary rate',
    perHour: 'USD {rate} per hour',
    jobDescription: 'Job description',
    observation: 'Observation',
    page: '{p} of {t} profiles',
    previous: 'Previous',
    next: 'Next',
    meta: {
      title: 'Deal detail',
      description: 'Deal detail',
    },
  },
}

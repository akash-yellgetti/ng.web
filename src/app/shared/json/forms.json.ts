import { budget } from './budet.json';

export const forms = {
  loginForm: {
    email: {
      name: 'email',
      label: 'Email',
      type: 'text',
      validations: 'required|email',
      value: '',
    },
    password: {
      name: 'password',
      label: 'Password',
      type: 'text',
      validations: 'required',
      value: '',
    },
  },
  registrationForm: {
    firstName: {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      validations: 'required',
      value: '',
    },
    lastName: {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      validations: 'required',
      value: '',
    },
    gender: {
      name: 'gender',
      label: 'Gender',
      type: 'text',
      validations: 'required',
      value: '',
    },
    dob: {
      name: 'dob',
      label: 'Date Of Birth',
      type: 'date',
      validations: 'required',
      value: '',
    },
    mobileNo: {
      name: 'mobileNo',
      label: 'Mobile No',
      type: 'date',
      validations: 'required',
      value: '',
    },
    no: {
      name: 'no',
      label: 'Mobile No',
      type: 'date',
      validations: 'required',
      value: '',
    },
    email: {
      name: 'email',
      label: 'Email',
      type: 'text',
      validations: 'required|email',
      value: '',
    },
    password: {
      name: 'password',
      label: 'Password',
      type: 'text',
      validations: 'required',
      value: '',
    },
    confirmPassword: {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'text',
      validations: 'required',
      value: '',
    },
  },
  // login: [
  //     {
  //         "name": "email",
  //         "label": "Email",
  //         "type": "text",
  //         "order": 1,
  //         "col": 12,
  //         "validations": "required|email",
  //     },
  //     {
  //         "name": "password",
  //         "label": "Password",
  //         "type": "text",
  //         "order": 2,
  //         "col": 12,
  //         "validations": "required",
  //     }
  // ],
  registration: [],
  budgetForm: {
    category: {
      name: 'category',
      label: 'Category',
      value: '',
      validations: 'required',
    },
    subcategory: {
      name: 'subcategory',
      label: 'Sub Category',
      value: '',
      validations: 'required',
    },
    title: {
      name: 'title',
      label: 'Title',
      value: '',
      validations: 'required',
    },
    description: {
      name: 'description',
      label: 'Description',
      value: '',
      validations: 'required',
    },
    amount: {
      name: 'amount',
      label: 'Amount',
      value: 0,
      validations: 'required',
    },
  },
  plannerForm: {
    type: {
      name: 'type',
      label: 'Type',
      value: '',
      validations: 'required',
    },
    title: {
      name: 'title',
      label: 'Title',
      value: '',
      validations: 'required',
    },
    description: {
      name: 'description',
      label: 'Description',
      value: '',
      validations: 'required',
    },
    amount: {
      name: 'amount',
      label: 'Amount',
      value: 0,
      validations: 'required',
    },
    rate: {
      name: 'rate',
      label: 'Rate Of Interest (p.a.)',
      value: 0,
      validations: 'required',
    },
    tenure: {
      name: 'tenure',
      label: 'Tenure (In-Years)',
      value: 0,
      validations: 'required',
    },
  },
  loanForm: {
    amount: {
      name: 'amount',
      label: 'Amount',
      value: 5000000,
      validations: 'required',
    },
    rate: {
      name: 'rate',
      label: 'Rate Of Interest (p.a.)',
      value: 9,
      validations: 'required',
    },
    tenure: {
      name: 'tenure',
      label: 'Tenure (In-Years)',
      value: 20,
      validations: 'required',
    },
    emi: {
      name: 'emi',
      label: 'EMI Amount',
      value: 0,
      validations: '',
    },
    growthRate: {
      name: 'growthRate',
      label: 'Annual Step-Up',
      value: 0,
      validations: '',
    },
    additionalAmount: {
      name: 'additionalAmount',
      label: 'Annual Part Payment',
      value: 0,
      validations: '',
    },

  },
};

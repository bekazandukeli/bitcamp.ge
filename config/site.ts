import { SiteConfig } from "types"
import { IntentItems } from "types"

export const siteConfig: SiteConfig = {
  name: "BitCamp",
  description:
    "🔥 სწავლა და ბრძოლა ✊",
  url: "https://www.bitcamp.ge",
  ogImage: "https://www.bitcamp.ge/og.jpg",
  links: {
    twitter: "https://twitter.com/otarza",
    github: "https://github.com/bitcamp.ge",
    facebook: "https://www.facebook.com/groups/bitcamp.ge",
    discord: "https://discord.com/invite/7mZ3QsxqKq",
  },
}

export const intentItems: IntentItems = {
  none: {
    machine_name: "none",
    description: "",
    url: "",
    service_id: 0,
    program_id: 0,
    mentor_id: 0,
    status: "",
    action: "",
    actionLabel: "",
  },
  free: {
    machine_name: "free",
    description: "გმადლობთ რომ დაინტერესდით BitCamp - ის უფასო კურსებით. რადგან უკვე გაიარეთ რეგისტრაცია, შეგიძლიათ ეწვიოთ უფასო კურსების განყოფილებას, აარჩიოთ თქვენთვის სასურველი კურსი და დაიწყოთ სწავლა.",
    url: "https://www.bitcamp.ge/classes",
    service_id: 1,
    program_id: 1,
    mentor_id: 1,
    status: "Active",
    action: "link",
    actionLabel: "დაიწყე სწავლა",
  },
  minimal: {
    machine_name: "minimal",
    description: "თქვენ შეარჩიეთ მინიმალური მომსახურება.",
    url: "https://www.bitcamp.ge/classes",
    service_id: 4,
    program_id: 4,
    mentor_id: 1,
    status: "Active",
    action: "buy",
    actionLabel: "შეძენა",
  },
  private: {
    machine_name: "private",
    description: "თქვენ შეარჩიეთ პირადი მენტორის აყვანის სერვისი 🎉 რეგისტრაციის დასასრულებლად დააჭირეთ შეძენის ღილაკს.",
    url: "https://www.bitcamp.ge/private",
    service_id: 3,
    program_id: 3,
    mentor_id: 1,
    status: "Pending",
    action: "buy",
    actionLabel: "შეძენა",
  },
  pro: {
    machine_name: "pro",
    description: "თქვენ შეარჩიეთ BitCamp PRO 🎉 რეგისტრაციის დასასრულებლად დააჭირეთ შეძენის ღილაკს.",
    url: "https://www.bitcamp.ge/pro",
    service_id: 1,
    program_id: 1,
    mentor_id: 1,
    status: "Pending",
    action: "buy",
    actionLabel: "შეძენა",

  },
  kids: {
    machine_name: "kids",
    description: "თქვენ შეარჩიეთ BitCamp Kids - საბავშვო პროგრამა 🎉 რეგისტრაციის დასასრულებლად დააჭირეთ შეძენის ღილაკს.",
    url: "https://www.bitcamp.ge/kids",
    service_id: 1,
    program_id: 1,
    mentor_id: 1,
    status: "Pending",
    action: "buy",
    actionLabel: "შეძენა",
  }
}

export const services = [
  {
    machine_name: "free",
    title: "უფასო",
    monthlyPrice: "0",
    yearlyPrice: "0",
    description: "დაიწყე პროგრამირების სწავლა უფასოდ",
    features: [
      {
        text: "ლექციების ჩანაწერები გასული სეზონიდან",
        checked: true
      },
      {
        text: "დავალებები და პროექტები",
        checked: true
      },
      {
        text: "წვდომა Discord - ის საჯარო არხებზე",
        checked: true
      },
      {
        text: "მენტორის დახმარება",
        crossed: true
      },
      {
        text: "ლექციებზე დასწრება (Zoom - ით)",
        crossed: true
      },
      {
        text: "დავალებების / პროექტების შემოწმება",
        crossed: true
      },
      {
        text: "შენი პროგრესის შეფასება ყოველკვირეულად",
        crossed: true
      },
      {
        text: "კოლაბორაციული / გუნდური პროექტები",
        crossed: true
      },
      {
        text: "Live Coding გასაუბრებები",
        crossed: true
      },
      {
        text: "მზადება სერთიფიცირებისთვის",
        crossed: true
      }
    ],
    actionLabel: "რეგისტრაცია",
    loggedInActionLabel: "დაწყება",
  },
  {
    machine_name: "minimal",
    title: "მინიმალური",
    monthlyPrice: 50,
    yearlyPrice: "?",
    description: "შეგიძლია შენთვის სასურველი ტექნოლოგიები: Front-End - JavaScript, HTML, CSS, React.js, Back-End - Node.js, Express.js, MongoDB, Python, Django.",
    features: [
      {
        text: "თეორიული ლექციები",
        checked: true
      },
      {
        text: "2 შეხვედრა / კვირაში (სემინარები)",
        checked: true
      },
      {
        text: "წვდომა დავალებებზე",
        checked: true
      },
      {
        text: "წვდომა პროექტებზე",
        checked: true
      },
      {
        text: "მოწვევა Discord სერვერზე",
        checked: true
      },
      {
        text: "საღამოს საათები",
        checked: true
      },
      {
        text: "შენზე მორგებული სწავლის ტემპი",
        checked: true
      },
      {
        text: "დასწრება შაბათის ფიზიკურ შეხვედრებზე",
        checked: true
      },
    ],
    actionLabel: "რეგისტრაცია",
    loggedInActionLabel: "შერჩევა",
    popular: false,
  },
  {
    machine_name: "private",
    title: "პირადი მენტორი",
    monthlyPrice: 200,
    yearlyPrice: "?",
    description: "პირადი მენტორი შეგიდგენს შენზე მორგებულ სასწავლო გეგმას, შეგირჩევს სასურველ ტექნოლოგიებს და გამეცადინებს ყოველდღიურ რეჟიმში",
    features: [
      {
        text: "თეორიული ლექციები",
        checked: true
      },
      {
        text: "პრაქტიკული სემინარები",
        checked: true
      },
      {
        text: "დავალებები და პროექტები",
        checked: true
      },
      {
        text: "შეუზღუდავი რაოდენობის ყოველდღიური შეხვედრები",
        checked: true
      },
      {
        text: "1 თეორიული და 2 პრაქტიკული ლექცია",
        checked: true
      },
      {
        text: "მენტორის დახმარება ყოველდღიურად 🔥",
        checked: true
      },
      {
        text: "პირადი მენტორის აყვანა და შენზე მორგებული სასწავლო გეგმის შედგენა 🔥",
        checked: true
      },
      {
        text: "დავალებების / პროექტების შემოწმება 🔥",
        checked: true
      },
      {
        text: "შენი პროგრესის შეფასება ყოველკვირეულად 🔥",
        checked: true
      },
      {
        text: "კოლაბორაციული / გუნდური პროექტები 🔥",
        checked: true
      },
      {
        text: "Live Coding გასაუბრებები 🔥",
        checked: true
      },
      {
        text: "მზადება სერტიფიცირებისთვის 🔥",
        checked: true
      }
    ],
    actionLabel: "რეგისტრაცია",
    loggedInActionLabel: "შერჩევა",
    popular: true,
  },
  {
    machine_name: "kids",
    title: "BitCamp Kids",
    monthlyPrice: "50",
    yearlyPrice: "0",
    description: "ასწავლეთ შვილებს პროგრამირება",
    features: [
      {
        text: "3 შეხვედრა / კვირაში (Zoom - ით)",
        checked: true
      },
      {
        text: "50 წუთიანი გაკვეთილები",
        checked: true
      },
      {
        text: "საშინაო დავალების გარეშე",
        checked: true
      },
      {
        text: "ინდივიდუალური ტემპი",
        checked: true
      },
      {
        text: "დამატებითი შეხვედრები საჭიროებისამებრ",
        checked: true
      },
      {
        text: "ბავშვებისთვის შედგენილი სასწავლო პროგრამა",
        checked: true
      },
      {
        text: "პროგრამირების საფუძვლები თამაშ-თამაშით",
        checked: true
      },
      {
        text: "ვასწავლით მშობლებსაც (სურვილისამებრ)",
        checked: true
      },
      {
        text: "გულისხმიერი და მეგობრული მასწავლებლები",
        checked: true
      },
      {
        text: "3 ეტაპიანი სასწავლო პროგრამა",
        checked: true
      },
      {
        text: "სერთიფიკატები",
        checked: true
      },
      {
        text: "მოწვევა შაბათის აქტივობებზე",
        checked: true
      },
    ],
    actionLabel: "რეგისტრაცია",
    loggedInActionLabel: "შერჩევა",
    actionData: {
      // Kids plan
      service_id: "1",
      program_id: "1",
      mentor_id: "1",
      status: "Pending"
    },
  },
  
];
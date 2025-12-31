export interface StackSection {
  title: string;
  content: string[];
}

export interface StackDetail {
  title: string;
  description: string;
  sections: StackSection[];
}

export interface StackItem {
  slug: string;
  number: string;
  title: string;
  description: string;
}

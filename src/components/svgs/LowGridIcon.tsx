interface Props {
  classname: string;
}

export const LowGridIcon = ({ classname }: Props) => (
  <svg
    aria-label="Table Rows"
    className={classname}
    fill="currentColor"
    height="20"
    role="img"
    viewBox="0 -960 960 960"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M760-200v-120H200v120h560Zm0-200v-160H200v160h560Zm0-240v-120H200v120h560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"></path>
  </svg>
);

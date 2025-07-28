interface Props {
  classname: string;
}

export const PlusIcon = ({ classname }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classname}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-labelledby="title-ac06 desc-ac06"
  >
    <title id="title-ac06">Open icon</title>
    <desc id="desc-ac06">icon that represents the state of the summary</desc>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const Date = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-4 w-4 w500:h-3 w500:w-3"
        viewBox="-0.5 0 15 15"
      >
        <path
          className="fill-lightModeText dark:fill-darkModeText"
          fillRule="evenodd"
          d="M61,154.006845 C61,153.45078 61.4499488,153 62.0068455,153 L73.9931545,153 C74.5492199,153 75,153.449949 75,154.006845 L75,165.993155 C75,166.54922 74.5500512,167 73.9931545,167 L62.0068455,167 C61.4507801,167 61,166.550051 61,165.993155 L61,154.006845 Z M62,157 L74,157 L74,166 L62,166 L62,157 Z M64,152.5 C64,152.223858 64.214035,152 64.5046844,152 L65.4953156,152 C65.7740451,152 66,152.231934 66,152.5 L66,153 L64,153 L64,152.5 Z M70,152.5 C70,152.223858 70.214035,152 70.5046844,152 L71.4953156,152 C71.7740451,152 72,152.231934 72,152.5 L72,153 L70,153 L70,152.5 Z"
          transform="translate(-61 -152)"
        ></path>
      </svg>
      <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
    </div>
  );
};

export default Date;

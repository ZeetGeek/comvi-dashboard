function Badge({ children, color }) {
     return (
          <>
               <span
                    className={`${
                         color === "primary"
                              ? "border-primary bg-primary/5 text-primary"
                              : color === "primary-light"
                                ? "border-primary-light bg-primary-light/5 text-primary-light"
                                : color === "secondary"
                                  ? "border-secondary bg-secondary/5 text-secondary"
                                  : color === "warning"
                                    ? "border-warning bg-warning/5 text-warning"
                                    : color === "info"
                                      ? "border-info bg-info/5 text-info"
                                      : color === "danger"
                                        ? "border-danger bg-danger/5 text-danger"
                                        : ""
                    } py-[0.3125rem] px-14 rounded-vsm border text-sm font-normal`}
               >
                    {children}
               </span>
          </>
     );
}

export default Badge;

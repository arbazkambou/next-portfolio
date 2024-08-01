<div className="flex flex-col gap-y-8">
  <div className="flex gap-x-4 items-center text-[22px] text-primary">
    <div>
      <Briefcase size={28} />
    </div>
    <h4 className="capitalize font-medium">
      {getData(qualificationData, "Experience").title}
    </h4>
  </div>
  {/* list */}
  <div className="flex flex-col gap-y-8">
    {getData(qualificationData, "Experience").data.map((item, index) => {
      const { company, role, year } = item;
      return (
        <div
          key={index}
          className="flex gap-x-8 group
"
        >
          <div className="h-[84px] w-[1px] bg-border relative ml-2">
            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
          </div>
          <div>
            <div className="font-semibold text-xl leading-none mb-2">
              {company}
            </div>
            <div className=" text-lg leading-none mb-4 text-muted-foreground">
              {role}
            </div>
            <div className="text-base font-medium">{year}</div>
          </div>
        </div>
      );
    })}
  </div>
</div>;

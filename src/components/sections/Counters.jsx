import Data from "@data/sections/counters.json";
import CountUp from 'react-countup';

const CountersSection = () => {
  return (
    <>
      {/* website-co Numbers */}
		<section className="website-co-section gap-top-140 gap-bottom-140">
			<div className="container">

				{/* Numbers items */}
				<div className="row">
					{Data.items.map((item, key) => (
					<div key={`counters-item-${key}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
						<div className="website-co-counter">
							<div className="num website-co-text-white js-counter">
								<CountUp end={item.value} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							{item.after != '' &&
							<div className="num-after website-co-text-white">{item.after}</div>
							}
							<div className="label">{item.label}</div>
						</div>
					</div>
					))}
				</div>
				
			</div>
		</section>
    </>
  );
};

export default CountersSection;
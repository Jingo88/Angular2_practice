export const HOUR_UP = "HOUR_UP";
export const SECOND_UP = "SECOND_UP";
export const SECOND_DOWN = "SECOND_DOWN";
export const ADVANCE = "ADVANCE";
export const RECALL = "RECALL";

export const clock = (state = new Date(), {type, payload} = {type: "", payload: "0"}) => {
	const date = new Date(state.getTime());
	switch(type){
		case SECOND_UP:
			date.setSeconds(date.getSeconds()+ parseInt(payload));
			return date;

		case HOUR_UP:
			date.setHours(date.getHours() +  parseInt(payload));
			return date;

		case SECOND_DOWN:
			date.setSeconds(date.getSeconds()- parseInt(payload));
			return date;
		
		default:
			return state;
	}
};

const defaultPeople=[
	{name: "Jason", time: clock()},
	{name: "Julissa", time:clock()},
	{name: "Tasfia", time:clock()},
	{name: "Wes", time:clock()},
]

export const people = (state = defaultPeople, {type, payload}) => {
	switch (type){
		case ADVANCE:
			return state.map((person)=>{
				if (payload === person){
					return {
						name: person.name,
						time: clock(person.time, {type: HOUR_UP, payload: "4"})
					}
				}
				return person;
			});

		case RECALL:
			return state.map((person) =>{
				return {
					name: person.name,
					time: payload
				}
			})

		default: 
			return state;
	}
}
import axios from 'axios';
import {GET_TICKET} from '../config/constants';
import {API} from '../config/api';

export const get_ticket = (dateStart  ) => {
         console.log(dateStart, "woi ini data start versi 1")
  return {
    type: GET_TICKET,
    payload: async () => {
      	const res = await API.get(`/tickets?dateStart=${dateStart}`);
      	console.log(res, "ini data respon")
	       // console.log(dateStart, "ini data start")
      	const data = res.data;
      	 return res.data;
    }

  };
};
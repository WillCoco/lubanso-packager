import socketIo from 'socket.io-client';
import { basicUrl } from '../package.json';

const socket = socketIo(basicUrl);

export default socket;

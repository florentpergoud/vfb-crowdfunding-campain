import { Config } from 'remotion';

Config.Output.setCodec('h264');
Config.Output.setCrf(1);
Config.Output.setOverwriteOutput(true);
Config.Output.setImageSequence(false);
Config.Rendering.setImageFormat('jpeg');

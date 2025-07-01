import { Exec, PortfolioData } from "../members";

import { teamData as data2007 } from "./2007";
import { teamData as data2008 } from "./2008";
import { teamData as data2009 } from "./2009";
import { teamData as data2010 } from "./2010";
import { teamData as data2011 } from "./2011";
import { teamData as data2012 } from "./2012";
import { teamData as data2013 } from "./2013";
import { teamData as data2014 } from "./2014";
import { teamData as data2015 } from "./2015";
import { teamData as data2016 } from "./2016";
import { teamData as data2017 } from "./2017";
import { teamData as data2018 } from "./2018";
import { teamData as data2019 } from "./2019";
import { teamData as data2020 } from "./2020";

export const TEAM_DATA_BY_YEAR: Record<number, { execs: Exec[], portfolios: PortfolioData[] }> = {
  2007: data2007,
  2008: data2008,
  2009: data2009,
  2010: data2010,
  2011: data2011,
  2012: data2012,
  2013: data2013,
  2014: data2014,
  2015: data2015,
  2016: data2016,
  2017: data2017,
  2018: data2018,
  2019: data2019,
  2020: data2020,
};
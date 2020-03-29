import * as React from 'react';
import { translateNumbersInString } from 'src/utils/translate';

const TranslateNumber: React.SFC<{ originalString: string; language: string }> = ({ originalString, language }) => {
  if (language == 'ne') {
    return (
      <React.Fragment>
        <span className="notranslate">{translateNumbersInString(originalString)}</span>
      </React.Fragment>
    );
  } else {
    return <React.Fragment>{originalString}</React.Fragment>;
  }
};

export default TranslateNumber;
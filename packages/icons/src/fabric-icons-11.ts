// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-11"`,
      src: `url('${baseUrl}fabric-icons-11-a4026982.woff') format('woff')`
    },
    icons: {
      'CaretTopLeftCenter8': '\uF367',
      'DonutChart': '\uF368',
      'ChevronUnfold10': '\uF369',
      'ChevronFold10': '\uF36A',
      'DoubleChevronDown8': '\uF36B',
      'DoubleChevronUp8': '\uF36C',
      'DoubleChevronLeft8': '\uF36D',
      'DoubleChevronRight8': '\uF36E',
      'ChevronDownEnd6': '\uF36F',
      'ChevronUpEnd6': '\uF370',
      'ChevronLeftEnd6': '\uF371',
      'ChevronRightEnd6': '\uF372',
      'ContextMenu': '\uF37C',
      'AzureAPIManagement': '\uF37F',
      'AzureServiceEndpoint': '\uF380',
      'VSTSLogo': '\uF381',
      'VSTSAltLogo1': '\uF382',
      'VSTSAltLogo2': '\uF383',
      'FileTypeSolution': '\uF387',
      'WordLogoInverse16': '\uF390',
      'WordLogo16': '\uF391',
      'WordLogoFill16': '\uF392',
      'PowerPointLogoInverse16': '\uF393',
      'PowerPointLogo16': '\uF394',
      'PowerPointLogoFill16': '\uF395',
      'ExcelLogoInverse16': '\uF396',
      'ExcelLogo16': '\uF397',
      'ExcelLogoFill16': '\uF398',
      'OneNoteLogoInverse16': '\uF399',
      'OneNoteLogo16': '\uF39A',
      'OneNoteLogoFill16': '\uF39B',
      'OutlookLogoInverse16': '\uF39C',
      'OutlookLogo16': '\uF39D',
      'OutlookLogoFill16': '\uF39E',
      'PublisherLogoInverse16': '\uF39F',
      'PublisherLogo16': '\uF3A0',
      'PublisherLogoFill16': '\uF3A1',
      'VisioLogoInverse16': '\uF3A2',
      'VisioLogo16': '\uF3A3',
      'VisioLogoFill16': '\uF3A4',
      'TestBeaker': '\uF3A5',
      'TestBeakerSolid': '\uF3A6',
      'TestExploreSolid': '\uF3A7',
      'TestAutoSolid': '\uF3A8',
      'TestUserSolid': '\uF3A9',
      'TestImpactSolid': '\uF3AA',
      'TestPlan': '\uF3AB',
      'TestStep': '\uF3AC',
      'TestParameter': '\uF3AD',
      'TestSuite': '\uF3AE',
      'TestCase': '\uF3AF',
      'Sprint': '\uF3B0',
      'SignOut': '\uF3B1',
      'TriggerApproval': '\uF3B2',
      'Rocket': '\uF3B3',
      'AzureKeyVault': '\uF3B4',
      'Transition': '\uF3BC',
      'LikeSolid': '\uF3BF',
      'DislikeSolid': '\uF3C0',
      'UnSetColor': '\uF3F9',
      'DeclineCall': '\uF405',
      'RectangularClipping': '\uF407',
      'TeamsLogo16': '\uF40A',
      'TeamsLogoFill16': '\uF40B',
      'Spacer': '\uF40D',
      'SkypeLogo16': '\uF40E',
      'SkypeForBusinessLogo16': '\uF40F',
      'SkypeForBusinessLogoFill16': '\uF410',
      'FilterSolid': '\uF412',
      'MailUndelivered': '\uF415',
      'MailTentative': '\uF416',
      'MailTentativeMirrored': '\uF417',
      'MailReminder': '\uF418',
      'ReceiptUndelivered': '\uF419',
      'ReceiptTentative': '\uF41A',
      'ReceiptTentativeMirrored': '\uF41B',
      'Inbox': '\uF41C',
      'IRMReply': '\uF41D',
      'IRMReplyMirrored': '\uF41E',
      'IRMForward': '\uF41F',
      'IRMForwardMirrored': '\uF420',
      'VoicemailIRM': '\uF421',
      'EventAccepted': '\uF422',
      'EventTentative': '\uF423',
      'EventTentativeMirrored': '\uF424',
      'EventDeclined': '\uF425',
      'IDBadge': '\uF427',
      'BackgroundColor': '\uF42B',
      'OfficeFormsLogoInverse16': '\uF433',
      'OfficeFormsLogo': '\uF434',
      'OfficeFormsLogoFill': '\uF435',
      'OfficeFormsLogo16': '\uF436',
      'OfficeFormsLogoFill16': '\uF437',
      'OfficeFormsLogoInverse24': '\uF43A',
      'OfficeFormsLogo24': '\uF43B',
      'OfficeFormsLogoFill24': '\uF43C',
      'PageLock': '\uF43F',
      'NotExecuted': '\uF440',
      'NotImpactedSolid': '\uF441',
      'FieldReadOnly': '\uF442'
    }
  };

  registerIcons(subset, options);
}

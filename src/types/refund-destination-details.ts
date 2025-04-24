import {
  External$RefundDestinationDetailsBlik,
  RefundDestinationDetailsBlik,
  Schemas$RefundDestinationDetailsBlik,
} from "./refund-destination-details-blik";
import {
  External$RefundDestinationDetailsBrBankTransfer,
  RefundDestinationDetailsBrBankTransfer,
  Schemas$RefundDestinationDetailsBrBankTransfer,
} from "./refund-destination-details-br-bank-transfer";
import {
  External$RefundDestinationDetailsCard,
  RefundDestinationDetailsCard,
  Schemas$RefundDestinationDetailsCard,
} from "./refund-destination-details-card";
import {
  External$RefundDestinationDetailsEuBankTransfer,
  RefundDestinationDetailsEuBankTransfer,
  Schemas$RefundDestinationDetailsEuBankTransfer,
} from "./refund-destination-details-eu-bank-transfer";
import {
  External$RefundDestinationDetailsGbBankTransfer,
  RefundDestinationDetailsGbBankTransfer,
  Schemas$RefundDestinationDetailsGbBankTransfer,
} from "./refund-destination-details-gb-bank-transfer";
import {
  External$RefundDestinationDetailsJpBankTransfer,
  RefundDestinationDetailsJpBankTransfer,
  Schemas$RefundDestinationDetailsJpBankTransfer,
} from "./refund-destination-details-jp-bank-transfer";
import {
  External$RefundDestinationDetailsMultibanco,
  RefundDestinationDetailsMultibanco,
  Schemas$RefundDestinationDetailsMultibanco,
} from "./refund-destination-details-multibanco";
import {
  External$RefundDestinationDetailsMxBankTransfer,
  RefundDestinationDetailsMxBankTransfer,
  Schemas$RefundDestinationDetailsMxBankTransfer,
} from "./refund-destination-details-mx-bank-transfer";
import {
  External$RefundDestinationDetailsP24,
  RefundDestinationDetailsP24,
  Schemas$RefundDestinationDetailsP24,
} from "./refund-destination-details-p24";
import {
  External$RefundDestinationDetailsSwish,
  RefundDestinationDetailsSwish,
  Schemas$RefundDestinationDetailsSwish,
} from "./refund-destination-details-swish";
import {
  External$RefundDestinationDetailsThBankTransfer,
  RefundDestinationDetailsThBankTransfer,
  Schemas$RefundDestinationDetailsThBankTransfer,
} from "./refund-destination-details-th-bank-transfer";
import {
  External$RefundDestinationDetailsUsBankTransfer,
  RefundDestinationDetailsUsBankTransfer,
  Schemas$RefundDestinationDetailsUsBankTransfer,
} from "./refund-destination-details-us-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RefundDestinationDetails = {
  affirm?: Record<string, any> | undefined;
  afterpayClearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  alma?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBankTransfer?: Record<string, any> | undefined;
  blik?: RefundDestinationDetailsBlik | undefined;
  brBankTransfer?: RefundDestinationDetailsBrBankTransfer | undefined;
  card?: RefundDestinationDetailsCard | undefined;
  cashapp?: Record<string, any> | undefined;
  customerCashBalance?: Record<string, any> | undefined;
  eps?: Record<string, any> | undefined;
  euBankTransfer?: RefundDestinationDetailsEuBankTransfer | undefined;
  gbBankTransfer?: RefundDestinationDetailsGbBankTransfer | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  jpBankTransfer?: RefundDestinationDetailsJpBankTransfer | undefined;
  klarna?: Record<string, any> | undefined;
  multibanco?: RefundDestinationDetailsMultibanco | undefined;
  mxBankTransfer?: RefundDestinationDetailsMxBankTransfer | undefined;
  nzBankTransfer?: Record<string, any> | undefined;
  p24?: RefundDestinationDetailsP24 | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  revolut?: Record<string, any> | undefined;
  sofort?: Record<string, any> | undefined;
  swish?: RefundDestinationDetailsSwish | undefined;
  thBankTransfer?: RefundDestinationDetailsThBankTransfer | undefined;
  /**
   * The type of transaction-specific details of the payment method used in the refund (e.g., `card`). An additional hash is included on `destination_details` with a name matching this value. It contains information specific to the refund transaction.
   */
  type: string;
  usBankTransfer?: RefundDestinationDetailsUsBankTransfer | undefined;
  wechatPay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * @internal
 * RefundDestinationDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundDestinationDetails = {
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_bank_transfer?: Record<string, any> | undefined;
  blik?: External$RefundDestinationDetailsBlik | undefined;
  br_bank_transfer?:
    | External$RefundDestinationDetailsBrBankTransfer
    | undefined;
  card?: External$RefundDestinationDetailsCard | undefined;
  cashapp?: Record<string, any> | undefined;
  customer_cash_balance?: Record<string, any> | undefined;
  eps?: Record<string, any> | undefined;
  eu_bank_transfer?:
    | External$RefundDestinationDetailsEuBankTransfer
    | undefined;
  gb_bank_transfer?:
    | External$RefundDestinationDetailsGbBankTransfer
    | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  jp_bank_transfer?:
    | External$RefundDestinationDetailsJpBankTransfer
    | undefined;
  klarna?: Record<string, any> | undefined;
  multibanco?: External$RefundDestinationDetailsMultibanco | undefined;
  mx_bank_transfer?:
    | External$RefundDestinationDetailsMxBankTransfer
    | undefined;
  nz_bank_transfer?: Record<string, any> | undefined;
  p24?: External$RefundDestinationDetailsP24 | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  revolut?: Record<string, any> | undefined;
  sofort?: Record<string, any> | undefined;
  swish?: External$RefundDestinationDetailsSwish | undefined;
  th_bank_transfer?:
    | External$RefundDestinationDetailsThBankTransfer
    | undefined;
  type: string;
  us_bank_transfer?:
    | External$RefundDestinationDetailsUsBankTransfer
    | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundDestinationDetails
 */
const SchemaIn$RefundDestinationDetails: z.ZodType<
  RefundDestinationDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_bank_transfer: z.record(z.string(), z.any()).optional(),
    blik: Schemas$RefundDestinationDetailsBlik.in.optional(),
    br_bank_transfer:
      Schemas$RefundDestinationDetailsBrBankTransfer.in.optional(),
    card: Schemas$RefundDestinationDetailsCard.in.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer_cash_balance: z.record(z.string(), z.any()).optional(),
    eps: z.record(z.string(), z.any()).optional(),
    eu_bank_transfer:
      Schemas$RefundDestinationDetailsEuBankTransfer.in.optional(),
    gb_bank_transfer:
      Schemas$RefundDestinationDetailsGbBankTransfer.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    jp_bank_transfer:
      Schemas$RefundDestinationDetailsJpBankTransfer.in.optional(),
    klarna: z.record(z.string(), z.any()).optional(),
    multibanco: Schemas$RefundDestinationDetailsMultibanco.in.optional(),
    mx_bank_transfer:
      Schemas$RefundDestinationDetailsMxBankTransfer.in.optional(),
    nz_bank_transfer: z.record(z.string(), z.any()).optional(),
    p24: Schemas$RefundDestinationDetailsP24.in.optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    revolut: z.record(z.string(), z.any()).optional(),
    sofort: z.record(z.string(), z.any()).optional(),
    swish: Schemas$RefundDestinationDetailsSwish.in.optional(),
    th_bank_transfer:
      Schemas$RefundDestinationDetailsThBankTransfer.in.optional(),
    type: z.string(),
    us_bank_transfer:
      Schemas$RefundDestinationDetailsUsBankTransfer.in.optional(),
    wechat_pay: z.record(z.string(), z.any()).optional(),
    zip: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      affirm: "affirm",
      afterpay_clearpay: "afterpayClearpay",
      alipay: "alipay",
      alma: "alma",
      amazon_pay: "amazonPay",
      au_bank_transfer: "auBankTransfer",
      blik: "blik",
      br_bank_transfer: "brBankTransfer",
      card: "card",
      cashapp: "cashapp",
      customer_cash_balance: "customerCashBalance",
      eps: "eps",
      eu_bank_transfer: "euBankTransfer",
      gb_bank_transfer: "gbBankTransfer",
      giropay: "giropay",
      grabpay: "grabpay",
      jp_bank_transfer: "jpBankTransfer",
      klarna: "klarna",
      multibanco: "multibanco",
      mx_bank_transfer: "mxBankTransfer",
      nz_bank_transfer: "nzBankTransfer",
      p24: "p24",
      paynow: "paynow",
      paypal: "paypal",
      pix: "pix",
      revolut: "revolut",
      sofort: "sofort",
      swish: "swish",
      th_bank_transfer: "thBankTransfer",
      type: "type",
      us_bank_transfer: "usBankTransfer",
      wechat_pay: "wechatPay",
      zip: "zip",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundDestinationDetails
 */
const SchemaOut$RefundDestinationDetails: z.ZodType<
  External$RefundDestinationDetails, // output type of this zod object
  z.ZodTypeDef,
  RefundDestinationDetails // the object to be transformed
> = z
  .object({
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBankTransfer: z.record(z.string(), z.any()).optional(),
    blik: Schemas$RefundDestinationDetailsBlik.out.optional(),
    brBankTransfer:
      Schemas$RefundDestinationDetailsBrBankTransfer.out.optional(),
    card: Schemas$RefundDestinationDetailsCard.out.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customerCashBalance: z.record(z.string(), z.any()).optional(),
    eps: z.record(z.string(), z.any()).optional(),
    euBankTransfer:
      Schemas$RefundDestinationDetailsEuBankTransfer.out.optional(),
    gbBankTransfer:
      Schemas$RefundDestinationDetailsGbBankTransfer.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    jpBankTransfer:
      Schemas$RefundDestinationDetailsJpBankTransfer.out.optional(),
    klarna: z.record(z.string(), z.any()).optional(),
    multibanco: Schemas$RefundDestinationDetailsMultibanco.out.optional(),
    mxBankTransfer:
      Schemas$RefundDestinationDetailsMxBankTransfer.out.optional(),
    nzBankTransfer: z.record(z.string(), z.any()).optional(),
    p24: Schemas$RefundDestinationDetailsP24.out.optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    revolut: z.record(z.string(), z.any()).optional(),
    sofort: z.record(z.string(), z.any()).optional(),
    swish: Schemas$RefundDestinationDetailsSwish.out.optional(),
    thBankTransfer:
      Schemas$RefundDestinationDetailsThBankTransfer.out.optional(),
    type: z.string(),
    usBankTransfer:
      Schemas$RefundDestinationDetailsUsBankTransfer.out.optional(),
    wechatPay: z.record(z.string(), z.any()).optional(),
    zip: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      affirm: "affirm",
      afterpayClearpay: "afterpay_clearpay",
      alipay: "alipay",
      alma: "alma",
      amazonPay: "amazon_pay",
      auBankTransfer: "au_bank_transfer",
      blik: "blik",
      brBankTransfer: "br_bank_transfer",
      card: "card",
      cashapp: "cashapp",
      customerCashBalance: "customer_cash_balance",
      eps: "eps",
      euBankTransfer: "eu_bank_transfer",
      gbBankTransfer: "gb_bank_transfer",
      giropay: "giropay",
      grabpay: "grabpay",
      jpBankTransfer: "jp_bank_transfer",
      klarna: "klarna",
      multibanco: "multibanco",
      mxBankTransfer: "mx_bank_transfer",
      nzBankTransfer: "nz_bank_transfer",
      p24: "p24",
      paynow: "paynow",
      paypal: "paypal",
      pix: "pix",
      revolut: "revolut",
      sofort: "sofort",
      swish: "swish",
      thBankTransfer: "th_bank_transfer",
      type: "type",
      usBankTransfer: "us_bank_transfer",
      wechatPay: "wechat_pay",
      zip: "zip",
    });
  });

export const Schemas$RefundDestinationDetails = {
  in: SchemaIn$RefundDestinationDetails,
  out: SchemaOut$RefundDestinationDetails,
};

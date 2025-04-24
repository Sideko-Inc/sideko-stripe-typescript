import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData,
  TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData,
} from "./test-helper-issuing-transaction-create-force-capture-body-merchant-data";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateForceCaptureBody
 */
export type TestHelperIssuingTransactionCreateForceCaptureBody = {
  /**
   * The total amount to attempt to capture. This amount is in the provided currency, or defaults to the cards currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Card associated with this transaction.
   */
  card: string;
  /**
   * The currency of the capture. If not provided, defaults to the currency of the card. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Details about the seller (grocery store, e-commerce website, etc.) where the card authorization happened.
   */
  merchantData?:
    | TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData
    | undefined;
  /**
   * Additional purchase information that is optionally provided by the merchant.
   */
  purchaseDetails?:
    | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | (
        | TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData
        | undefined
      )
    | (
        | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails
        | undefined
      )
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingTransactionCreateForceCaptureBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateForceCaptureBody = {
  amount: number;
  card: string;
  currency?: string | undefined;
  expand?: string[] | undefined;
  merchant_data?:
    | External$TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData
    | undefined;
  purchase_details?:
    | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails
    | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | (
        | External$TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData
        | undefined
      )
    | (
        | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails
        | undefined
      )
    | External$TestHelperIssuingTransactionCreateForceCaptureBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateForceCaptureBody
 */
const SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBody: z.ZodType<
  TestHelperIssuingTransactionCreateForceCaptureBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    card: z.string(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    merchant_data:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData.in.optional(),
    purchase_details:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      card: "card",
      currency: "currency",
      expand: "expand",
      merchant_data: "merchantData",
      purchase_details: "purchaseDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateForceCaptureBody
 */
const SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBody: z.ZodType<
  External$TestHelperIssuingTransactionCreateForceCaptureBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateForceCaptureBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    card: z.string(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    merchantData:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData.out.optional(),
    purchaseDetails:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      card: "card",
      currency: "currency",
      expand: "expand",
      merchantData: "merchant_data",
      purchaseDetails: "purchase_details",
    });
  });

export const Schemas$TestHelperIssuingTransactionCreateForceCaptureBody = {
  in: SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBody,
  out: SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBody,
};

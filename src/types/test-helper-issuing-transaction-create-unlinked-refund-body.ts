import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-merchant-data";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateUnlinkedRefundBody
 */
export type TestHelperIssuingTransactionCreateUnlinkedRefundBody = {
  /**
   * The total amount to attempt to refund. This amount is in the provided currency, or defaults to the cards currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Card associated with this unlinked refund transaction.
   */
  card: string;
  /**
   * The currency of the unlinked refund. If not provided, defaults to the currency of the card. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
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
    | TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData
    | undefined;
  /**
   * Additional purchase information that is optionally provided by the merchant.
   */
  purchaseDetails?:
    | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails
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
        | TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData
        | undefined
      )
    | (
        | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails
        | undefined
      )
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingTransactionCreateUnlinkedRefundBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateUnlinkedRefundBody = {
  amount: number;
  card: string;
  currency?: string | undefined;
  expand?: string[] | undefined;
  merchant_data?:
    | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData
    | undefined;
  purchase_details?:
    | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails
    | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | (
        | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData
        | undefined
      )
    | (
        | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails
        | undefined
      )
    | External$TestHelperIssuingTransactionCreateUnlinkedRefundBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateUnlinkedRefundBody
 */
const SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBody: z.ZodType<
  TestHelperIssuingTransactionCreateUnlinkedRefundBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    card: z.string(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    merchant_data:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData.in.optional(),
    purchase_details:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateUnlinkedRefundBody
 */
const SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBody: z.ZodType<
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateUnlinkedRefundBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    card: z.string(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    merchantData:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData.out.optional(),
    purchaseDetails:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails.out.optional(),
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

export const Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBody = {
  in: SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBody,
  out: SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBody,
};

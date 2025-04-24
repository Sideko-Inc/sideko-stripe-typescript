import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData,
  TestHelperIssuingTransactionCreateForceCaptureBodyMerchantData,
} from "@sideko-inc/stripe/types/test-helper-issuing-transaction-create-force-capture-body-merchant-data";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails,
} from "@sideko-inc/stripe/types/test-helper-issuing-transaction-create-force-capture-body-purchase-details";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyMerchantData,
} from "@sideko-inc/stripe/types/test-helper-issuing-transaction-create-unlinked-refund-body-merchant-data";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails,
} from "@sideko-inc/stripe/types/test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details";
import {
  External$TestHelperIssuingTransactionRefundBody,
  Schemas$TestHelperIssuingTransactionRefundBody,
  TestHelperIssuingTransactionRefundBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-transaction-refund-body";
import * as z from "zod";

/**
 * CreateForceCaptureRequest
 */
export type CreateForceCaptureRequest = {
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
};

/**
 * @internal
 * CreateForceCaptureRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateForceCaptureRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateForceCaptureRequest
 */
const SchemaIn$CreateForceCaptureRequest: z.ZodType<
  CreateForceCaptureRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateForceCaptureRequest
 */
const SchemaOut$CreateForceCaptureRequest: z.ZodType<
  External$CreateForceCaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateForceCaptureRequest // the object to be transformed
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

export const Schemas$CreateForceCaptureRequest = {
  in: SchemaIn$CreateForceCaptureRequest,
  out: SchemaOut$CreateForceCaptureRequest,
};

/**
 * CreateUnlinkedRefundRequest
 */
export type CreateUnlinkedRefundRequest = {
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
};

/**
 * @internal
 * CreateUnlinkedRefundRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateUnlinkedRefundRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateUnlinkedRefundRequest
 */
const SchemaIn$CreateUnlinkedRefundRequest: z.ZodType<
  CreateUnlinkedRefundRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateUnlinkedRefundRequest
 */
const SchemaOut$CreateUnlinkedRefundRequest: z.ZodType<
  External$CreateUnlinkedRefundRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateUnlinkedRefundRequest // the object to be transformed
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

export const Schemas$CreateUnlinkedRefundRequest = {
  in: SchemaIn$CreateUnlinkedRefundRequest,
  out: SchemaOut$CreateUnlinkedRefundRequest,
};

/**
 * RefundRequest
 */
export type RefundRequest = {
  data?: TestHelperIssuingTransactionRefundBody | undefined;
  transaction: string;
};

/**
 * @internal
 * RefundRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundRequest = {
  data?: External$TestHelperIssuingTransactionRefundBody | undefined;
  transaction: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundRequest
 */
const SchemaIn$RefundRequest: z.ZodType<
  RefundRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingTransactionRefundBody.in.optional(),
    transaction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      transaction: "transaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundRequest
 */
const SchemaOut$RefundRequest: z.ZodType<
  External$RefundRequest, // output type of this zod object
  z.ZodTypeDef,
  RefundRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingTransactionRefundBody.out.optional(),
    transaction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      transaction: "transaction",
    });
  });

export const Schemas$RefundRequest = {
  in: SchemaIn$RefundRequest,
  out: SchemaOut$RefundRequest,
};

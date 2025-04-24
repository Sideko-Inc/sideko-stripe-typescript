import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails,
} from "./test-helper-issuing-authorization-capture-body-purchase-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBody
 */
export type TestHelperIssuingAuthorizationCaptureBody = {
  /**
   * The amount to capture from the authorization. If not provided, the full amount of the authorization will be captured. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  captureAmount?: number | undefined;
  /**
   * Whether to close the authorization after capture. Defaults to true. Set to false to enable multi-capture flows.
   */
  closeAuthorization?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Additional purchase information that is optionally provided by the merchant.
   */
  purchaseDetails?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (boolean | undefined)
    | (string[] | undefined)
    | (TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBody = {
  capture_amount?: number | undefined;
  close_authorization?: boolean | undefined;
  expand?: string[] | undefined;
  purchase_details?:
    | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails
    | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (boolean | undefined)
    | (string[] | undefined)
    | (
        | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails
        | undefined
      )
    | External$TestHelperIssuingAuthorizationCaptureBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBody
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBody: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_amount: z.number().int().optional(),
    close_authorization: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    purchase_details:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      capture_amount: "captureAmount",
      close_authorization: "closeAuthorization",
      expand: "expand",
      purchase_details: "purchaseDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBody
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBody: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBody // the object to be transformed
> = z
  .object({
    captureAmount: z.number().int().optional(),
    closeAuthorization: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    purchaseDetails:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      captureAmount: "capture_amount",
      closeAuthorization: "close_authorization",
      expand: "expand",
      purchaseDetails: "purchase_details",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCaptureBody = {
  in: SchemaIn$TestHelperIssuingAuthorizationCaptureBody,
  out: SchemaOut$TestHelperIssuingAuthorizationCaptureBody,
};

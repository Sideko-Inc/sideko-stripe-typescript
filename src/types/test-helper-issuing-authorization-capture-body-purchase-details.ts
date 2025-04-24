import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-fleet";
import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-flight";
import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFuel,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFuel,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFuel,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-fuel";
import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-lodging";
import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-receipt-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional purchase information that is optionally provided by the merchant.
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails = {
  fleet?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet
    | undefined;
  flight?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight
    | undefined;
  fuel?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFuel
    | undefined;
  lodging?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging
    | undefined;
  receipt?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem[]
    | undefined;
  reference?: string | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails =
  {
    fleet?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet
      | undefined;
    flight?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight
      | undefined;
    fuel?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFuel
      | undefined;
    lodging?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging
      | undefined;
    receipt?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem[]
      | undefined;
    reference?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fleet:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet.in.optional(),
    flight:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight.in.optional(),
    fuel: Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFuel.in.optional(),
    lodging:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging.in.optional(),
    receipt: z
      .array(
        Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem.in,
      )
      .optional(),
    reference: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fleet: "fleet",
      flight: "flight",
      fuel: "fuel",
      lodging: "lodging",
      receipt: "receipt",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails // the object to be transformed
> = z
  .object({
    fleet:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet.out.optional(),
    flight:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight.out.optional(),
    fuel: Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFuel.out.optional(),
    lodging:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging.out.optional(),
    receipt: z
      .array(
        Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem.out,
      )
      .optional(),
    reference: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fleet: "fleet",
      flight: "flight",
      fuel: "fuel",
      lodging: "lodging",
      receipt: "receipt",
      reference: "reference",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetails,
  };

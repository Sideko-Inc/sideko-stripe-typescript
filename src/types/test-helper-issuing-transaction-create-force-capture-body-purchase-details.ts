import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-fleet";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-flight";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-fuel";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsLodging,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsLodging,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsLodging,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-lodging";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-receipt-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional purchase information that is optionally provided by the merchant.
 */
export type TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails =
  {
    fleet?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet
      | undefined;
    flight?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight
      | undefined;
    fuel?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel
      | undefined;
    lodging?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsLodging
      | undefined;
    receipt?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem[]
      | undefined;
    reference?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails =
  {
    fleet?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet
      | undefined;
    flight?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight
      | undefined;
    fuel?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel
      | undefined;
    lodging?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsLodging
      | undefined;
    receipt?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem[]
      | undefined;
    reference?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails
 */
const SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails: z.ZodType<
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fleet:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet.in.optional(),
    flight:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight.in.optional(),
    fuel: Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel.in.optional(),
    lodging:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsLodging.in.optional(),
    receipt: z
      .array(
        Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails
 */
const SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails: z.ZodType<
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails // the object to be transformed
> = z
  .object({
    fleet:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet.out.optional(),
    flight:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight.out.optional(),
    fuel: Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel.out.optional(),
    lodging:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsLodging.out.optional(),
    receipt: z
      .array(
        Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem.out,
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

export const Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails,
    out: SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetails,
  };

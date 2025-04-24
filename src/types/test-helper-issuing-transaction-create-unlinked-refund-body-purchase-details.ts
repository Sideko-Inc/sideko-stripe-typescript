import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-fleet";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-flight";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFuel,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFuel,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFuel,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-fuel";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-lodging";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-receipt-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional purchase information that is optionally provided by the merchant.
 */
export type TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails =
  {
    fleet?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet
      | undefined;
    flight?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight
      | undefined;
    fuel?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFuel
      | undefined;
    lodging?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging
      | undefined;
    receipt?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem[]
      | undefined;
    reference?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails =
  {
    fleet?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet
      | undefined;
    flight?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight
      | undefined;
    fuel?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFuel
      | undefined;
    lodging?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging
      | undefined;
    receipt?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem[]
      | undefined;
    reference?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails
 */
const SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails: z.ZodType<
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fleet:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet.in.optional(),
    flight:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight.in.optional(),
    fuel: Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFuel.in.optional(),
    lodging:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging.in.optional(),
    receipt: z
      .array(
        Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails
 */
const SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails: z.ZodType<
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails // the object to be transformed
> = z
  .object({
    fleet:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet.out.optional(),
    flight:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight.out.optional(),
    fuel: Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFuel.out.optional(),
    lodging:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging.out.optional(),
    receipt: z
      .array(
        Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem.out,
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

export const Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails,
    out: SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetails,
  };

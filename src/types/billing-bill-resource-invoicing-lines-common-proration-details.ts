import {
  BillingBillResourceInvoicingLinesCommonCreditedItems,
  External$BillingBillResourceInvoicingLinesCommonCreditedItems,
  Schemas$BillingBillResourceInvoicingLinesCommonCreditedItems,
} from "./billing-bill-resource-invoicing-lines-common-credited-items";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingLinesCommonProrationDetails = {
  creditedItems?:
    | BillingBillResourceInvoicingLinesCommonCreditedItems
    | undefined;
};

/**
 * @internal
 * BillingBillResourceInvoicingLinesCommonProrationDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingLinesCommonProrationDetails = {
  credited_items?:
    | External$BillingBillResourceInvoicingLinesCommonCreditedItems
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingLinesCommonProrationDetails
 */
const SchemaIn$BillingBillResourceInvoicingLinesCommonProrationDetails: z.ZodType<
  BillingBillResourceInvoicingLinesCommonProrationDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credited_items:
      Schemas$BillingBillResourceInvoicingLinesCommonCreditedItems.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credited_items: "creditedItems",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingLinesCommonProrationDetails
 */
const SchemaOut$BillingBillResourceInvoicingLinesCommonProrationDetails: z.ZodType<
  External$BillingBillResourceInvoicingLinesCommonProrationDetails, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingLinesCommonProrationDetails // the object to be transformed
> = z
  .object({
    creditedItems:
      Schemas$BillingBillResourceInvoicingLinesCommonCreditedItems.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditedItems: "credited_items",
    });
  });

export const Schemas$BillingBillResourceInvoicingLinesCommonProrationDetails = {
  in: SchemaIn$BillingBillResourceInvoicingLinesCommonProrationDetails,
  out: SchemaOut$BillingBillResourceInvoicingLinesCommonProrationDetails,
};

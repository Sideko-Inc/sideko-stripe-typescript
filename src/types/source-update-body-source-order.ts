import {
  External$SourceUpdateBodySourceOrderItemsItem,
  Schemas$SourceUpdateBodySourceOrderItemsItem,
  SourceUpdateBodySourceOrderItemsItem,
} from "./source-update-body-source-order-items-item";
import {
  External$SourceUpdateBodySourceOrderShipping,
  Schemas$SourceUpdateBodySourceOrderShipping,
  SourceUpdateBodySourceOrderShipping,
} from "./source-update-body-source-order-shipping";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
 */
export type SourceUpdateBodySourceOrder = {
  items?: SourceUpdateBodySourceOrderItemsItem[] | undefined;
  shipping?: SourceUpdateBodySourceOrderShipping | undefined;
};

/**
 * @internal
 * SourceUpdateBodySourceOrder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceUpdateBodySourceOrder = {
  items?: External$SourceUpdateBodySourceOrderItemsItem[] | undefined;
  shipping?: External$SourceUpdateBodySourceOrderShipping | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceUpdateBodySourceOrder
 */
const SchemaIn$SourceUpdateBodySourceOrder: z.ZodType<
  SourceUpdateBodySourceOrder, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    items: z.array(Schemas$SourceUpdateBodySourceOrderItemsItem.in).optional(),
    shipping: Schemas$SourceUpdateBodySourceOrderShipping.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      items: "items",
      shipping: "shipping",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceUpdateBodySourceOrder
 */
const SchemaOut$SourceUpdateBodySourceOrder: z.ZodType<
  External$SourceUpdateBodySourceOrder, // output type of this zod object
  z.ZodTypeDef,
  SourceUpdateBodySourceOrder // the object to be transformed
> = z
  .object({
    items: z.array(Schemas$SourceUpdateBodySourceOrderItemsItem.out).optional(),
    shipping: Schemas$SourceUpdateBodySourceOrderShipping.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      items: "items",
      shipping: "shipping",
    });
  });

export const Schemas$SourceUpdateBodySourceOrder = {
  in: SchemaIn$SourceUpdateBodySourceOrder,
  out: SchemaOut$SourceUpdateBodySourceOrder,
};

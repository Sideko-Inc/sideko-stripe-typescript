import {
  External$SourceCreateBodySourceOrderItemsItem,
  Schemas$SourceCreateBodySourceOrderItemsItem,
  SourceCreateBodySourceOrderItemsItem,
} from "./source-create-body-source-order-items-item";
import {
  External$SourceCreateBodySourceOrderShipping,
  Schemas$SourceCreateBodySourceOrderShipping,
  SourceCreateBodySourceOrderShipping,
} from "./source-create-body-source-order-shipping";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
 */
export type SourceCreateBodySourceOrder = {
  items?: SourceCreateBodySourceOrderItemsItem[] | undefined;
  shipping?: SourceCreateBodySourceOrderShipping | undefined;
};

/**
 * @internal
 * SourceCreateBodySourceOrder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodySourceOrder = {
  items?: External$SourceCreateBodySourceOrderItemsItem[] | undefined;
  shipping?: External$SourceCreateBodySourceOrderShipping | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodySourceOrder
 */
const SchemaIn$SourceCreateBodySourceOrder: z.ZodType<
  SourceCreateBodySourceOrder, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    items: z.array(Schemas$SourceCreateBodySourceOrderItemsItem.in).optional(),
    shipping: Schemas$SourceCreateBodySourceOrderShipping.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      items: "items",
      shipping: "shipping",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodySourceOrder
 */
const SchemaOut$SourceCreateBodySourceOrder: z.ZodType<
  External$SourceCreateBodySourceOrder, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodySourceOrder // the object to be transformed
> = z
  .object({
    items: z.array(Schemas$SourceCreateBodySourceOrderItemsItem.out).optional(),
    shipping: Schemas$SourceCreateBodySourceOrderShipping.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      items: "items",
      shipping: "shipping",
    });
  });

export const Schemas$SourceCreateBodySourceOrder = {
  in: SchemaIn$SourceCreateBodySourceOrder,
  out: SchemaOut$SourceCreateBodySourceOrder,
};
